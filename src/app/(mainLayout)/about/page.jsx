"use client";
import React, { useEffect, useState } from "react";
import {
  Leaf,
  HandHeart,
  GraduationCap,
  Scale,
  HeartPulse,
  Users,
  TrendingUp,
  Heart,
  Globe,
  Lightbulb,
  CheckCircle,
  Target,
  Award,
  MapPin,
} from "lucide-react";
import MissionVision from "@/components/mainLayout/pages/MissionVision";
import Numbers from "@/components/mainLayout/pages/Numbers";
import OurPartners from "@/components/mainLayout/pages/Partners";


export default function About() {
  const images = [
    "https://i.ibb.co.com/Pzzzcrpf/Screenshot-2026-02-11-120224.png",
    "https://i.ibb.co.com/Zqn6rKf/Screenshot-2026-02-11-120237.png",
    "https://i.ibb.co.com/SkLVj3C/Screenshot-2026-02-11-120248.png",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/630142471_834977552928507_2121097542758993365_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8yuSF_xYDXUQ7kNvwE1K9IA&_nc_oc=AdmDw0QL0FtS2AViQOoBmYVJptaekoe1TgYDFRGQzNIXom3gkEw0fkLjH8r3lPD3AOo&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=myInnZ2tuvJ67jdjHWwSTw&oh=00_AfvV9_GZqcSqQGk6u4820wQpbG-Ajmaxuzm61B501rGPig&oe=6992095B",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/630526896_834977529595176_506175100321992261_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vFNMVWqkD4EQ7kNvwFechXB&_nc_oc=Adl3GR0Xz4hKVDpU86_ysC8_q0OBCRy5oC32eFs2iB8gr6cJN0VXdg6LGbA9pe0WUL4&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=Lt_wbZUP_37AkxrOhVDsPw&oh=00_Afs52d1HZG67bQqNCeB1FZJoua0QADuXWgtE_ztCtS6c3g&oe=6991E17E",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/629734028_834977519595177_7806978560091439448_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=21autYVVg6wQ7kNvwHTvV9A&_nc_oc=AdnOoTByMDdRJJzzdTyZQwK4-B7lvrudgLHjyjaaUfHASdg1URKRJnEcm1yu_2JnFiM&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=8VFFJkH4fmhpo1ogu3ou5w&oh=00_AfuXMumgnJOroPaMUv6HWkeCAQOq65LaZ4rNstkFhyWkWg&oe=6991EED5",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/631308480_834127383013524_3731511658539259019_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ELhJ2Fv5xrgQ7kNvwGsLxKm&_nc_oc=Adnr6_ftO5r0LksMbvQX12q_a7RdRW0ywjB_GoQtB6O0Tv_HwLl4-Vdw7GLYouZV8jE&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=vZv9DWhHTriCVBJ3LodNxA&oh=00_AftLiZ_0MuW56KfzaNRxuVt7Z8VdKALFnhCrMdN9jgXF7w&oe=6991EC92",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/631302909_834127813013481_5110374961234877500_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NkdewPyQCKwQ7kNvwGuU45C&_nc_oc=Admd4qJtOAqPS-kKE0-w17XCJsP7EJfKx_GbQkOnpe8E5cMj7rDftK5hLmzqAc2Y4FM&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=C01JZy2P_wRrxCm06kyhZA&oh=00_AftKQ_ZEi_IKCoGmSrh_WBEcpZqApoPb2va6bUyf2UOrZA&oe=6991F91D",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/631058952_834127996346796_5078027203465941388_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-wVTwDykoyEQ7kNvwFmmtA9&_nc_oc=AdnbPUWw6FHC_QCtmCDZdTNTQpBPN8i-NmWvHKSAaK_Gaps2Zaa8AMoI5J7wV-TS9co&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=_bY5et69uViLlui7ktLvqg&oh=00_AfsenOeEV5E8-t8PbIxmjgeSEOqbhpjLGrDP9oZQUC4gfA&oe=69920E1E",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/631048702_833813739711555_6430460537322469394_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=24KGKu4NO0IQ7kNvwE6xWE5&_nc_oc=AdkKlACeshEKB7ciKE_JJiUF0VdqtarMmnnb-2X_n6asN_eUljsBNJBsC6Dv9SxETjw&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=ywHhXQtJzf_fms2XoEW6sw&oh=00_AfsfBegk46E_jtvCtC3v2JyibBCnAg01iXQY4GFlzc5KtQ&oe=6991E341",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/630646305_833813823044880_7833701592610946435_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=V-wmxsWXKlkQ7kNvwGu_HTP&_nc_oc=AdmSUyvqX_0shdBAgVboVIXIPWagl2T2rtvRC4i9bAvH-YGRrNkSa1n_MqSnUrHEDAg&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=kA_aRUzHVG8431s1PmvlAQ&oh=00_AfsYpxb6Pj1cm6vZMwO8pWxpL4XR86B5xdapFsrCo9z8xA&oe=6991E977",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/630668631_833814026378193_7058131855442905212_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Cy9JRYwyT70Q7kNvwFdbLi0&_nc_oc=AdnVze0q9bdCnlP37Zvt-_mRbExQxFtficj9l_es0Kf44rcrn0o51py_pYocsIITvT0&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=89SHBNCyxcA80swTDEL_7g&oh=00_Afu4xrLBVn3tqs87j8riLpiCpwDApW7PLhgoZVHD3XCC-A&oe=69921918",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/629441310_832060229886906_8191261125659076805_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_lkNLduCBjkQ7kNvwE4ka0E&_nc_oc=AdnmUDaOyln_goaARHpYfytDBdyNuZ4QBbxaa5UEPje_uqlm5ztIqevGSJmA650qJYg&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=lqgYR1Fi2Qwx46oM-kAbpw&oh=00_Afuv-PEaAwRojTSBK7QUyBaw-9vJT-JAEX5O4y34Vh6rFQ&oe=6991F4CD",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/629304396_832060373220225_6861607353562286407_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=res4bzCx_rgQ7kNvwHrB_VO&_nc_oc=AdnnZlKhvwdUHQte9ksqcfzjrglAAELPUJcIE51Ayc6roCIFqDHXx_UcL1euXGB_AZo&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=uXQHmSZg6o4tpMfdWKxVQA&oh=00_AftY-Vu8fYt-iB5j-pnNEdoPpjAY2cww4IRVex_6Xhtc8w&oe=6991F119",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/626373801_830865673339695_961579760040569911_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lCxmRCwylUQQ7kNvwFcDw2z&_nc_oc=Adnaoa1CzmNxXH07yV3Z84Um8NAzsUPAgE8FxglXyq-ryj5o_rf3hiju86fBqaX8pjs&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=vYMXItdHhk7ZhU36Q0Ujbg&oh=00_AfuzOxog2lMuSAxcZAVzaQy2hDPZcUAWOMc9lgwLy5PAyQ&oe=69920E13",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/626804779_830865793339683_7132598567546446812_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Y4hUr2VW72IQ7kNvwEBNX04&_nc_oc=Adm9-NXVMVMbvYSpNs_D1WNVJo2FRF2iDfsc3GbauRGTb7Xao3hxmhFTCtemZTNESUc&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=w_xSoeihNzpB1ZNpjqigLg&oh=00_AfvnRbxzIjwg7rVsPW-8h-NIEwZ9eWx3z0FLcA1SwomTQg&oe=6991F245",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/628173770_830865790006350_5896533895274539250_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Xo1E5_8zxH4Q7kNvwFlhjst&_nc_oc=AdlnS-gXkneSJYU5y99Vhrk8C2Ne24KavhpuUGrK4Mpr_Ny7MN4w3THHje0SbRo6Cyg&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=3XBESXswtYvtCvn95ayedw&oh=00_AftrNVxgLpKSI_e1GwojCU-GOP8QCmoqva9mKdICYuekag&oe=69920459",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/627693826_830892003337062_5840624486218644253_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AKqYxndwS5MQ7kNvwGcok9t&_nc_oc=AdlM2ac7Gz2QgFI5Bk_wVseLiM2fy7jTQa2aVG561dc5Vv7I3o2G4xRcY1BehY04yhs&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=SWgqoldBtlx9fbvpKJkLsg&oh=00_AfuRgPU4_ud7VZws5w82wjpM1hs4DiVtw6sqrP5LecMvBg&oe=69921128",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/628422915_830892050003724_3616748873355225257_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SLmM_6uOyjcQ7kNvwGXXLWt&_nc_oc=AdkI046Dng3n8e4OjaIU2tI3izmHFGJWkNBSVW3GvBWZWdCqZIdTES0xzOTp3nizvc4&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=JyADdkT6cmefOUY8BJCoLw&oh=00_Aftn1Iu5J9VWVv1KCYTRZnKM-pHRTH4Vn_wEO2YAYi8swQ&oe=6991F225",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/627688167_830892146670381_8380212786770610777_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=N_bUws_0cqMQ7kNvwFJgC_J&_nc_oc=Adn35kWDBklwPYx548HwV_mdzyjUlBh8tPdUnjC9RYx9nnVOzB6m47dzBAeRnZnXhs8&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=ne_6LCpcNpNkzLLd71OvjQ&oh=00_Aft0CAyr97vR-o8GoHyEOMPJgH4zvxjpnixUwRJ4QBRYNg&oe=6991FE08",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/627240583_829120180180911_3384775836908763576_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5dHBPTt0CW4Q7kNvwFVMfZa&_nc_oc=AdmgETqIdTlBAkkAcFV2q5OmHF6ZG3rkLlujr4Eikw-M9M1Naz_4MnOJLBEYRuTyCFk&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=laDQWBBzMpHLmWX6Lko33Q&oh=00_AfuF71mWH12ct74dM3qtLKcHCrTiCjjamFnCPNw9cLMtvA&oe=6991E3AC",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/627675984_830888970004032_7924767216962067983_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=X8h-dIBdeEMQ7kNvwFM5h6J&_nc_oc=Adk7nwXITA2UZvYPUuHGHGNjQa_sbYrcH1vosi36wOhTUh2V71zAdVk7Z0cQibqeeZ8&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=MGQQpyPHPs52yHq5O-d9AQ&oh=00_AfvV-WMoj_aqDrEPvXKCv5PLH8e9XFz44ljpSnbJMmwK1A&oe=6992002C",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/627673806_830889060004023_3795155955824519872_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=il0rA95aPEUQ7kNvwE5Hb8u&_nc_oc=AdnOQ9SDbbExFQ7uUoY8ntt0aQZZqr4XuAKpBl2XxcbG8uSkLKkyKHLm8FtiZDxr7IM&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=Ebn9OFjrb440taU5jTXTnA&oh=00_AftTFwVxXXkul-KmXgtbDZbXTwQzmvFLPbT7ppscW4OYzQ&oe=69920E6D",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/629319151_830889240004005_8096332113668317316_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=auV0qHavdNoQ7kNvwHZwsLT&_nc_oc=Adlm_HiEOSkGDuJ3qbL7Dnjxvxo0T2MlfeKdpUP9Jc5_xH6IWkU10sgnPWtYqX9lJsY&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=JIjL4K3SLh8cf9qmDlnrOg&oh=00_AfsXvvle4BJRgvTy_X8_NceeyuCcnRc3UkCn0esGMPuqbg&oe=699202ED",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/626853859_828397966919799_9111517683190587803_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2Mjj-V6aU0YQ7kNvwGhTsUT&_nc_oc=AdkevJmpajxxwWOHQEaiV1N2biJAHsCax_NLEaumwRGkz8R54C6nBl1fu62lUFuPiVI&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=QaiTiKhKQiredwx1gjaZ-w&oh=00_AfssESghb0uQ3evF0tdiEzjUdeEnHOeyKsom0a-e-p-Olw&oe=69921239",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/626657848_828398080253121_5709746538497216608_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_5Nd6G1fEakQ7kNvwGi5rvh&_nc_oc=Adla2G83_K-lHVJE4jEcn-DiTEtRpkgxhaA3QTIREfdGlIVAXkazFlQ-2jw37A0ap3M&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=yuGFM0tYg5-YHX2bZSFrrQ&oh=00_AfuCAMRF_3igZfYxWXFPGrxOoY7_miKFml6lM5xlQVfrnw&oe=6991F17B",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/627382821_828398113586451_3153832366353270717_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Brz2EEzMCmwQ7kNvwHboZf-&_nc_oc=Adm5phh2jKsCuPyUX3FLvjMB-GkmZ8dtzz9YA9pqTlQXvbVfdBWhI5HS23tKvhqUBic&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=x7slCDUR8h4Oqu8KdYW3RQ&oh=00_AfvtKrzUTiIXqk_DwBuuSgAEvbVB6LPxMrAsDvHY2fbTuQ&oe=69920B2D",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/626722282_827963460296583_4523477038742765069_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XjA9LiRPBHEQ7kNvwFJIphi&_nc_oc=AdmEKjS3uyfSCK0Bn658Xo9XOIFIMOfdZBkXNCADF1kzxBRqzrmMKUEdZcZvj0uWQ4Y&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=K884DdtjA1otQKfHAJMwaw&oh=00_AfuehlkMCV8jMmhxmKTi7yErY9rPMDMJADd6aiFX77G6hw&oe=6991F59C",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/624571964_827963536963242_5281570132004487599_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aeOIUNWpMe4Q7kNvwFjYsC9&_nc_oc=AdltXpbkNGa01HjhgZTDeIObFKDgPNayaLCeYNXMtLmL7m-CjISlaBJPUvm3rGzP0rI&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=JfkvMl4gwwNeif1x-A9Fhg&oh=00_AfsYjjN6C8BsdXfpNZ9FUnwXxvCLQyKAgcwKWRa43zx5dA&oe=6991E640",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/624822864_827963456963250_5601582040871295380_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uxTZu7iQm9EQ7kNvwFk1UJn&_nc_oc=AdmZgKHYEgALbMhpGrwKTgmvVoDtwBtrZlqCmnYoj17zbAqd7GrE33XiiklcXHrUGHI&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=xqe6NqldT7ooJ6ArI2ddcQ&oh=00_AfuKiN5zFuuWT6ORUx2movYrXd_SYLqJQ7HpQegWovI0Ag&oe=6991E477",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/624932101_827722963653966_7229841347665812230_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7Lb3Z8MFitYQ7kNvwEvbG65&_nc_oc=AdmGvPr3ELl6M-jWjp6VoNmIAU0qeT5p5PDshl3KS3UEoeFvRuDKjCxQjbhTypMxkRQ&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=FCykVzrQwk69PsFoUJWvsA&oh=00_AfuD4Rxcx23SqgBY3KJEGq6FABD6kl3DOK4qL3z1UXXtKw&oe=69920AEB",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/626792410_827722930320636_4057726052747859506_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ol9F9l2HIJMQ7kNvwE5XKxj&_nc_oc=AdnGdZo9k-rw691lC91ws7ptsvY9D5iLbWtGodn4HTVIrJ_QPR0JkyjVYb9iIcLxBpk&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=tQhLaBTuCflqYNufeHIL4g&oh=00_Afu6KoxqLjnxczL2BiHEw4jsEcdHXOCGj_1tSgBafoj1xQ&oe=69921B9F",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/623411854_827722960320633_5829362996367204878_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zqGM2Ttor38Q7kNvwGSHOuI&_nc_oc=AdnlWue4N_YrPlka3BM4WWP-Eeq9S9LCuawjhotAh7lOFWkkxKvjrq_sOSsVPPKuQGY&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=PzePbMMZ4Oaj_RESX4Xncg&oh=00_AfsE7x32gadEPjC6DdYQbZfbq8IWfEx0_GYVJ4udLGanaw&oe=699215CA",
  ];

  const batchSize = 3; 
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + batchSize) % images.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);


  const currentImages = [];
  for (let i = 0; i < batchSize; i++) {
    currentImages.push(images[(startIndex + i) % images.length]);
  }

  return (
    <main className=" mx-auto px-4 sm:px-6 py-12 space-y-16">

      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-300 via-primary-300 to-primary-300 p-8 md:p-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-200/20 rounded-full translate-y-24 -translate-x-24"></div>

        < div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-900">
            About OAB Foundation
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
            At OAB Foundation, we believe in building a better world through
            sustainability, equality, and collective action. Since 2018, we have
            been working across Bangladesh to create lasting impact aligned with
            the United Nations Sustainable Development Goals (SDGs).
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2 text-primary-600">
              <Globe className="h-6 w-6" />
              <span className="font-semibold">Nationwide Impact</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
            <div className="flex items-center space-x-2 text-primary-600">
              <Users className="h-6 w-6" />
              <span className="font-semibold">Thousands of Volunteers</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
            <div className="flex items-center space-x-2 text-primary-600">
              <Award className="h-6 w-6" />
              <span className="font-semibold">Since 2018</span>
            </div>
          </div>
        </ div>
      </section>

      {/* Who We Are */}
      < section
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="animate-on-scroll"
      >
        <div className="flex flex-col md:flex-row items-start gap-6 mb-10">
          <div className="p-3 bg-primary/10 rounded-xl md:mt-2 shrink-0">
            <Lightbulb className="h-8 w-8 text-primary-600" />
          </div>

          <div className="flex-1">
            <div className="mb-8">
              <div className="inline-block">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Who We Are
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg pl-4 mb-4">
              <span className="text-primary-600 font-semibold">
                OAB Foundation (Over All Bangladesh Foundation)
              </span>{" "}
              is a visionary non-profit organization established in{" "}
              <span className="text-primary-600 font-semibold">2018</span> with
              a strong commitment to building a{" "}
              <span className="text-primary-600 font-semibold">
                sustainable, inclusive, and equitable Bangladesh
              </span>
              . From its inception, the foundation has been working tirelessly
              to
              <strong>address pressing social challenges</strong>, uplift{" "}
              <strong>disadvantaged communities</strong>, and promote the values
              of <strong>justice, equality, and sustainability</strong>.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg pl-4 mb-4">
              Over the years,{" "}
              <span className="text-primary-600 font-semibold">
                OAB Foundation
              </span>{" "}
              has grown into a nationwide platform for
              <strong>youth, volunteers, and change-makers</strong> united by a
              shared dream of creating a{" "}
              <span className="text-primary-600 font-semibold">
                fairer and greener future
              </span>
              . Through diverse programs and initiatives, we empower{" "}
              <strong>children, women, and young people</strong> to become
              <strong>
                skilled, confident, and socially responsible citizens
              </strong>{" "}
              capable of leading positive change within their own communities.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg pl-4">
              Our work is deeply rooted in the belief that{" "}
              <span className="text-primary-600 font-semibold">
                sustainable development
              </span>{" "}
              is only possible when{" "}
              <strong>communities are actively involved</strong> in shaping
              their own future. By aligning our initiatives with the{" "}
              <span className="text-primary-600 font-semibold">
                United Nations Sustainable Development Goals (SDGs)
              </span>
              , we ensure that our{" "}
              <span className="text-primary-600 font-semibold">impact</span> is
              both <strong>locally meaningful</strong> and{" "}
              <strong>globally relevant</strong>.
            </p>

            <section className="mt-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Our Activities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentImages.map((src, index) => (
                  < img
                    key={index}
                    src={src}
                    alt={`OAB Foundation Activity ${index + 1}`}
                    className="rounded-xl w-full h-48 object-cover shadow-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                ))}
              </div>
            </section>

            {/* Highlight points */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="group relative overflow-hidden p-6 bg-gradient-to-br from-primary-100 to-primary-500 rounded-2xl  transition-all duration-300 hover:shadow-lg">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-125 hover:border-primary-700 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Nationwide Presence
                  </h4>
                  <p className="text-gray-700">
                    Active engagement across rural and urban communities
                    throughout Bangladesh with grassroots implementation.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden p-6 bg-gradient-to-br from-primary-100 to-primary-500 rounded-2xl  transition-all duration-300 hover:shadow-lg">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Youth-Driven Movement
                  </h4>
                  <p className="text-gray-700">
                    Powered by passionate youth and volunteers committed to
                    social responsibility and sustainable development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ section>

      {/* Core Work Areas */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Our Core{" "}
          <span className="text-primary-600 font-bold">Work Areas</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Leaf className="h-7 w-7 text-primary-600" />,
              title: "Climate Action & Environment",
              description:
                "Raising awareness, training youth, and driving community-based solutions to fight climate change and protect our planet.",
              color: "from-primary-50 to-primary-100 border-primary-100",
            },
            {
              icon: <HandHeart className="h-7 w-7 text-primary-600" />,
              title: "Women & Children Empowerment",
              description:
                "Ensuring rights, education, healthcare, and leadership opportunities for women and disadvantaged children.",
              color: "from-primary-50 to-primary-100 border-primary-100",
            },
            {
              icon: <GraduationCap className="h-7 w-7 text-primary-600" />,
              title: "Education & Skill Development",
              description:
                "Equipping young people with knowledge, leadership skills, and capacity-building programs through the OAB Learning Academy.",
              color: "from-primary-50 to-primary-100 border-primary-100",
            },
            {
              icon: <Scale className="h-7 w-7 text-primary-600" />,
              title: "Human Rights & Social Development",
              description:
                "Promoting equality, justice, and inclusive growth by uplifting marginalized communities.",
              color: "from-primary-50 to-primary-100 border-primary-100",
            },
            {
              icon: <HeartPulse className="h-7 w-7 text-primary-600" />,
              title: "Health & Well-being",
              description:
                "Saving lives and improving health through the OAB Blood Bank, health campaigns, and awareness initiatives.",
              color: "from-primary-50 to-primary-100 border-primary-100",
            },
            {
              icon: <Target className="h-7 w-7 text-primary-600" />,
              title: "Community Development",
              description:
                "Building sustainable communities through integrated development programs and grassroots initiatives.",
              color: "from-primary-50 to-primary-100 border-primary-100",
            },
          ].map((area, index) => (
            < div
              key={index}
              initial={{ opacity: 0, y: 20 }}
          
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`bg-gradient-to-br ${area.color} p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 group`}
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">
                {area.title}
              </h3>
              <p className="text-gray-700">{area.description}</p>
            </ div>
          ))}
        </div>
      </section>

      {/* Work in Action */}
      < section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="animate-on-scroll"
      >
        <div className=" rounded-2xl p-4 ">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Our Work in Action
          </h2>
          <div className="space-y-5">
            {[
              "Running community-based initiatives that provide education, training, and opportunities to underprivileged groups.",
              "Organizing awareness campaigns, workshops, and advocacy programs for social justice and environmental protection.",
              "Focusing on youth leadership development to build skills, confidence, and vision for a sustainable society.",
              "Partnering with national and international organizations to amplify impact and bring global solutions to local challenges.",
              "Implementing projects such as health awareness drives, blood donation programs, skill development workshops, and climate action campaigns.",
            ].map((item, index) => (
              < div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 mt-1 transform group-hover:scale-125 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 text-primary-600" />
                </div>
                <p className="text-gray-700 flex-1">{item}</p>
              </ div>
            ))}
          </div>
        </div>
      </ section>

      {/* Impact Stats */}
      <section className="py-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          {" "}
          Our <span className="text-primary-600 font-bold">Impact</span> in
          Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: Users,
              label: "Active Volunteers",
              value: "10,000+",
              description: "Nationwide engagement",
              gradient: "from-primary-500 to-primary-600",
              delay: 0.1,
            },
            {
              icon: TrendingUp,
              label: "Successful Campaigns",
              value: "250+",
              description: "Strategic initiatives",
              gradient: "from-primary-500 to-primary-500",
              delay: 0.2,
            },
            {
              icon: Heart,
              label: "Communities Impacted",
              value: "100+",
              description: "Positive transformation",
              gradient: "from-primary-500 to-primary-600",
              delay: 0.3,
            },
            {
              icon: MapPin,
              label: "Regions Covered",
              value: "8",
              description: "National footprint",
              gradient: "from-primary-500 to-primary-500",
              delay: 0.4,
            },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              < div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary p-6 rounded-2xl shadow-sm border border-gray-200 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`text-3xl text-primary-700 mb-3 flex justify-center`}
                >
                  <IconComponent className="h-10 w-10" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className={`text-gray-700 font-medium mb-1 `}>
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">{stat.description}</div>
                {/* Animated Progress Line */}
                <div className="mt-6 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  < div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: stat.delay + 0.3 }}
                    className={`h-full bg-gradient-to-r ${stat.gradient}`}
                  />
                </div>
              </ div>
            );
          })}
        </div>
      </section>

      {/* Our Belief */}
      < section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="animate-on-scroll  rounded-2xl p-8 md:p-10  hover:border hover:bg-primary-100 border-primary-500"
      >
        <div className="flex items-start gap-4 mb-6">
          <Heart className="h-8 w-8 text-primary-500 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Belief</h2>
            <div className="space-y-4">
              < p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-700 text-lg leading-relaxed"
              >
                At the core of OAB Foundation lies a simple but powerful belief:
                sustainable change begins with people. By empowering individuals
                and creating platforms for leadership and action, we aim to
                transform entire communities.
              </ p>
              < p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-700 text-lg leading-relaxed"
              >
                We believe meaningful change begins at the local level. That's
                why we listen to communities, understand their needs, and
                co-create solutions with them—from rural villages to urban
                centers—rooted in trust, action, and hope.
              </ p>
            </div>
          </div>
        </div>
      </ section>
      <MissionVision></MissionVision>
    <Numbers></Numbers>
    <OurPartners></OurPartners>
    </main>
  );
}
