"use client";
import {useEffect} from "react";
import {setCookie} from "cookies-next";
const SettingComponent = () => {
  useEffect(() => {
    setCookie("apiKey", "7035c60c");
  }, []);

  return <></>;
};

export default SettingComponent;
