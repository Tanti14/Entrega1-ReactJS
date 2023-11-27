import React from "react";
import { createContext } from "react";

export const MenuContext = createContext();
const { Provider } = MenuContext;

export const ContextMenu = ({ children }) => {
  const [menuState, setMenuState] = useState(0);
  const refMenuBtn = useRef(),
    refMenu = useRef();

  const handleToggleMenu = () => {
    if (menuState === 0) {
      setMenuState((prev) => prev + 1);
      refMenu.current.style.transform = "translate(0)";
    } else {
      setMenuState(0);
      refMenu.current.style.transform = "translate(105%)";
    }
  };

  const closeMenuOnScroll = () => {
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY !== 0 && menuState === 1) {
          setMenuState(0);
          refMenu.current.style.transform = "translate(105%)";
        }
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [menuState]);
  };

  return (
    <Provider
      value={{
        menuState,
        handleToggleMenu,
        refMenuBtn,
        refMenu,
        closeMenuOnScroll,
      }}
    >
      {children}
    </Provider>
  );
};
