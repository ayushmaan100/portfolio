// src/components/CodingProfiles.jsx

"use client";

import React from 'react';
import ProfileCard from './ProfileCard';

const codingProfiles = [
  {
    platform: "Codeforces",
    username: "ayushmaan_2004",
    stats: [
      { label: "Max Rating", value: "1720" },
      { label: "Current", value: "1600" }
    ],
    url: "https://codeforces.com/profile/ayushmaan_2004",
    logo: "/Codeforces.png",
    accentColor: "#1f8acb"
  },
  {
    platform: "LeetCode",
    username: "ayushmaan_2004",
    stats: [
      { label: "Problems Solved", value: "350" },
      { label: "Ranking", value: "Top 10%" }
    ],
    url: "https://leetcode.com/u/ayushmaan_2004/",
    logo: "/Leetcode.png",
    accentColor: "#f89f1b"
  },
  {
    platform: "GitHub",
    username: "ayushmaan100",
    stats: [
      { label: "Repositories", value: "42" },
      { label: "Contributions", value: "1.2k+" }
    ],
    url: "https://github.com/ayushmaan100/",
    logo: "/Github.png",
    accentColor: "#ffffff"
  }
];

const CodingProfiles = () => {
  return (
    <section className="bg-black py-10 px-5">
      <h2 className="text-white text-3xl font-bold text-center mb-10" data-aos="fade-down">
        Coding Profiles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {codingProfiles.map((profile, idx) => (
          <ProfileCard key={idx} {...profile} />
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;