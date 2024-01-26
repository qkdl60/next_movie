"use client";
import {FormEvent, useEffect, useRef} from "react";
import MovieCard from "@/components/MovieCard";
import {auth, authStore} from "@/store/store";
import axios from "axios";
import Link from "next/link";
import {useRecoilState, useRecoilValue, useResetRecoilState} from "recoil";
import {motion} from "framer-motion";
/*
요청 주소: https://omdbapi.com
Method: GET
API_KEY: 7035c60c
*/

const Home = () => {
  const box = useRef(null);

  return <></>;
};

export default Home;
