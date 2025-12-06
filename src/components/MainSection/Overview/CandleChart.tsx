import { useEffect, useRef, useState } from "react";
import { createChart, ColorType } from "lightweight-charts";

// таймфрейми
const TIMEFRAMES = [
  { label: "1m", value: "1m" },
  { label: "5m", value: "5m" },
  { label: "15m", value: "15m" },
  { label: "1h", value: "1h" },
  { label: "4h", value: "4h" },
  { label: "1d", value: "1d" },
];

// монети
const SYMBOLS = [
  "BTCUSDT",
  "ETHUSDT",
  "AVAXUSDT",
  "SOLUSDT",
  "BNBUSDT",
  "XRPUSDT",
  "ADAUSDT",
  "DOGEUSDT",
];

export default function TVChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const candleSeriesRef = useRef<any>(null);

  const [symbol, setSymbol] = useState("AVAXUSDT");
  const [timeframe, setTimeframe] = useState("1h");
  const [price, setPrice] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);

  // ------------------------------
  // CREATE CHART ONCE
  // ------------------------------
  useEffect(() => {
    const chart = createChart(chartRef.current!, {
      width: chartRef.current!.clientWidth,
      height: 500,
      layout: {
        background: { color: "#0B0F1A" },
        textColor: "#C8D1E3",
      },
      grid: {
        vertLines: { color: "#1E2639" },
        horzLines: { color: "#1E2639" },
      },
      crosshair: {
        mode: 1,
      },
      rightPriceScale: {
        borderColor: "#1E2639",
        scaleMargins: {
          top: 0.02, // мінімум пустоти, як у TradingView
          bottom: 0.1,
        },
      },
      timeScale: {
        borderColor: "#1E2639",
        fixLeftEdge: true,
        fixRightEdge: true,
      },
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderUpColor: "#26a69a",
      borderDownColor: "#ef5350",
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    candleSeriesRef.current = candleSeries;

    // адаптація по resize
    const handleResize = () => {
      chart.applyOptions({
        width: chartRef.current!.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, []);

  // ------------------------------
  // LOAD CANDLES ON CHANGE
  // ------------------------------
  useEffect(() => {
    async function load() {
      const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${timeframe}&limit=500`;
      const res = await fetch(url);
      const data = await res.json();

      const formatted = data.map((d: any) => ({
        time: d[0] / 1000,
        open: +d[1],
        high: +d[2],
        low: +d[3],
        close: +d[4],
      }));

      candleSeriesRef.current.setData(formatted);
      setPrice(+data[data.length - 1][4]);
    }

    if (candleSeriesRef.current) load();
  }, [symbol, timeframe]);

  const filteredSymbols = SYMBOLS.filter((s) =>
    s.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        width: "100%",
        padding: "10px",
        background: "#0D1220",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.06)",
        fontFamily: "Inter",
      }}
    >
      {/* ---------------- HEADER ---------------- */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12px",
          alignItems: "center",
        }}
      >
        {/* SYMBOL SELECT */}
        <div style={{ position: "relative" }}>
          <div
            onClick={() => setOpenDropdown(!openDropdown)}
            style={{
              padding: "8px 14px",
              background: "#1A2032",
              borderRadius: "10px",
              cursor: "pointer",
              color: "white",
              fontWeight: "600",
            }}
          >
            {symbol}
          </div>

          {openDropdown && (
            <div
              style={{
                position: "absolute",
                top: "48px",
                left: 0,
                width: "200px",
                background: "#151B29",
                borderRadius: "10px",
                padding: "10px",
                border: "1px solid rgba(255,255,255,0.1)",
                zIndex: 10,
              }}
            >
              <input
                placeholder="Search coin..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  padding: "6px",
                  borderRadius: "6px",
                  border: "none",
                  marginBottom: "8px",
                  background: "#0F1524",
                  color: "#D7E1FF",
                }}
              />

              <div style={{ maxHeight: "160px", overflowY: "auto" }}>
                {filteredSymbols.map((sym) => (
                  <div
                    key={sym}
                    onClick={() => {
                      setSymbol(sym);
                      setOpenDropdown(false);
                    }}
                    style={{
                      padding: "8px",
                      cursor: "pointer",
                      borderRadius: "6px",
                      background:
                        sym === symbol
                          ? "rgba(255,255,255,0.15)"
                          : "transparent",
                      color: "white",
                    }}
                  >
                    {sym}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* PRICE */}
        <div
          style={{
            fontSize: "1.3rem",
            fontWeight: "700",
            color: "#8FB2FF",
          }}
        >
          {price ? `$${price.toFixed(3)}` : "..."}
        </div>
      </div>

      {/* ---------------- TIMEFRAMES ---------------- */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
        {TIMEFRAMES.map((t) => (
          <button
            key={t.value}
            onClick={() => setTimeframe(t.value)}
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background:
                timeframe === t.value ? "#3147C5" : "rgba(255,255,255,0.1)",
              color: "white",
              fontSize: "0.9rem",
              fontWeight: "600",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ---------------- CHART ---------------- */}
      <div
        ref={chartRef}
        style={{
          width: "100%",
          height: "500px",
          background: "#0B0F1A",
          borderRadius: "12px",
        }}
      />
    </div>
  );
}
