"use client";
import Description from "@/components/Description";
import LogoImage from "@/components/LogoImage";
import Navbar from "@/components/Navbar";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box className="flex flex-col-reverse md:grid md:gap-10 md:grid-cols-2 md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto">
        <Description />
        <LogoImage />
      </Box>
    </Box>
  );
}
