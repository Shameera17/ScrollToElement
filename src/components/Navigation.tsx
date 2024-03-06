import { handleClickScroll } from "../util/helpers";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a
            style={{ cursor: "pointer" }}
            onClick={() => handleClickScroll("section1")}
          >
            Section 1
          </a>
        </li>
        <li>
          <a
            style={{ cursor: "pointer" }}
            onClick={() => handleClickScroll("section2")}
          >
            Section 2
          </a>
        </li>
        <li>
          <a
            style={{ cursor: "pointer" }}
            onClick={() => handleClickScroll("section3")}
          >
            Section 3
          </a>
        </li>
        <li>
          <a
            style={{ cursor: "pointer" }}
            onClick={() => handleClickScroll("section4")}
          >
            Section 4
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
