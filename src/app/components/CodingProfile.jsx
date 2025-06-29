"use client"

import AOS from "aos";
import Image from "next/image"
import { useEffect } from "react";



export default function CodingProfile(){
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return(
        <div id="Coding" className="mb-10 bg-slate-300 overflow-auto">
            <div className="" data-aos="fade-up">
                <div className="flex justify-center space-x-4 max-sm:space-x-2  py-4">
                    {/* Codeforces */}
                    <div className="text-center" data-aos="fade-right">
                        <a href="https://codeforces.com/profile/ayushmaan_2004" target="blank">
                            <Image className="w-[55px] mx-auto" src="/Codeforces.png" width={1000} height={1000} alt="Codeforces" />
                            <p className="text-black font-medium">Max Rating: 1251</p>
                        </a>
                    </div>

                    {/* CodeChef */}
                    <div className="text-center" data-aos="fade-up">
                        <a href="https://www.codechef.com/users/askpersonal001" target="blank">
                            <Image className="w-[50px] mx-auto" src="/codechef.png" width={1000} height={1000} alt="CodeChef" />
                            <p className="text-black font-medium">Rating: 1650+</p>
                        </a>
                    </div>

                    {/* LeetCode */}
                    <div className="text-center" data-aos="fade-right">
                        <a href="https://leetcode.com/u/ayushmaan_2004/" target="blank">
                            <Image className="w-[60px] mx-auto" src="/Leetcode.png" width={1000} height={1000} alt="LeetCode" />
                            <p className="text-black font-medium">Rating: 1850+</p>
                        </a>
                    </div>

                    {/* GFG */}
                    <div className="text-center" data-aos="fade-left">
                        <a href="https://www.geeksforgeeks.org/user/ayushmaan_2004/" target="blank">
                            <Image className="w-[55px] mx-auto" src="/GFG.png" width={1000} height={1000} alt="GFG" />
                            <p className="text-black font-medium">Solved: 400+</p>
                        </a>
                    </div>

                    {/* GitHub */}
                    <div className="text-center" data-aos="fade-up">
                        <a href="https://github.com/ayushmaan100/" target="blank">
                            <Image className="w-[55px] mx-auto" src="/Github.png" width={1000} height={1000} alt="GitHub" />
                            <p className="text-black font-medium">Repos: 16+</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}