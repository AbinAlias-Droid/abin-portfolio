import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";

export default function Portfolio() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        color: "white",
        padding: "2rem",
        fontFamily: "monospace",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: 0,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Abin Alias</h1>

      <p style={{ maxWidth: "600px", fontSize: "1.2rem", lineHeight: "1.8" }}>
        Hello and welcome! I am currently studying Information Technology at
        Queensland University of Technology in Brisbane. My interests include
        software development, web design, and other creative tech projects!
        <br />
        <br />
        Take a look at my work through the tabs below :D
      </p>

      <nav style={{ marginTop: "2rem" }}>
        <a
          href="#projects"
          style={{
            margin: "0 1rem",
            color: "#fff",
            textDecoration: "underline",
          }}
        >
          Projects
        </a>
        <a
          href="#skills"
          style={{
            margin: "0 1rem",
            color: "#fff",
            textDecoration: "underline",
          }}
        >
          Skills
        </a>
        <a
          href="#contact"
          style={{
            margin: "0 1rem",
            color: "#fff",
            textDecoration: "underline",
          }}
        >
          Contact
        </a>
        <a
          href="https://www.linkedin.com/in/abin-alias-08541a346"
          target="_blank"
          rel="noreferrer"
          style={{
            margin: "0 1rem",
            color: "#fff",
            textDecoration: "underline",
          }}
        >
          LinkedIn
        </a>
      </nav>
    </div>
  );
}
