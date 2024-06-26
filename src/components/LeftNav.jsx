import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/ContextApi";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/Constants";

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(Context);
    const clickHandler=(name,type)=>{
      switch (type) {
        case 'category':
          return setSelectCategories(name)
          case 'home':
            return setSelectCategories(name)  
          case 'menu':
            return false
        default:
          break;
      }
    }

  const navigate = useNavigate();
  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full absolute bg-black md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-0": ""}`}>
      <div className="flex px-5 flex-col">
        {categories.map((item, index) => {
          return (
            <>
              <LeftNavMenuItem
                key={item.name}
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {clickHandler(item.name,item.type);
                  navigate('/');
                }}
                className={`${
                  selectCategories == item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">

        </div>
      </div>
    </div>
  );
};

export default LeftNav;
