import "./AvatarSection.css";
import manExample from "../img/man-example.jpg";

function AvatarSection() {
  const navigate = useNavigate();

  const [user, setUser] = useState<{
    username: string;
    avatar: string;
  } | null>(null);

  const isOpen = false;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleNavigate = () => {
    navigate("/login-page-section");
  };

  return (
    <div className="avatar-container">
        <FiChevronRight className="arrow-right-icon" />
      </button>
      <img className="user-img" src={manExample} alt="Avatar" />
      <span className="username">username</span>
      <FiChevronRight className="arrow-right-icon" />
    </div>
  );
}

export default AvatarSection;
