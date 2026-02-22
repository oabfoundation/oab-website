"use client";
import Image from "next/image";
import { Camera } from "lucide-react";

const images = [
  "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/630646305_833813823044880_7833701592610946435_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ATPfcRcma9kQ7kNvwGS38V5&_nc_oc=AdlOsCza6vyUYUgrtvGOskG5XvjoKt4ITQg3i-IzDIxZ5KHf3UUQueK8zqP6j5xSDpw&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=gUtdtJs_szqVbKZ5jJeA4A&oh=00_AfsrGRNT8OfiJ95UnrPfpU8jVrzarbreMrthhUbElIGVZQ&oe=69A069F7",
  "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/630646305_833813823044880_7833701592610946435_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ATPfcRcma9kQ7kNvwGS38V5&_nc_oc=AdlOsCza6vyUYUgrtvGOskG5XvjoKt4ITQg3i-IzDIxZ5KHf3UUQueK8zqP6j5xSDpw&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=gUtdtJs_szqVbKZ5jJeA4A&oh=00_AfsrGRNT8OfiJ95UnrPfpU8jVrzarbreMrthhUbElIGVZQ&oe=69A069F7",
  "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/630646305_833813823044880_7833701592610946435_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ATPfcRcma9kQ7kNvwGS38V5&_nc_oc=AdlOsCza6vyUYUgrtvGOskG5XvjoKt4ITQg3i-IzDIxZ5KHf3UUQueK8zqP6j5xSDpw&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=gUtdtJs_szqVbKZ5jJeA4A&oh=00_AfsrGRNT8OfiJ95UnrPfpU8jVrzarbreMrthhUbElIGVZQ&oe=69A069F7",
  "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/630646305_833813823044880_7833701592610946435_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ATPfcRcma9kQ7kNvwGS38V5&_nc_oc=AdlOsCza6vyUYUgrtvGOskG5XvjoKt4ITQg3i-IzDIxZ5KHf3UUQueK8zqP6j5xSDpw&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=gUtdtJs_szqVbKZ5jJeA4A&oh=00_AfsrGRNT8OfiJ95UnrPfpU8jVrzarbreMrthhUbElIGVZQ&oe=69A069F7",
  "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/630646305_833813823044880_7833701592610946435_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ATPfcRcma9kQ7kNvwGS38V5&_nc_oc=AdlOsCza6vyUYUgrtvGOskG5XvjoKt4ITQg3i-IzDIxZ5KHf3UUQueK8zqP6j5xSDpw&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=gUtdtJs_szqVbKZ5jJeA4A&oh=00_AfsrGRNT8OfiJ95UnrPfpU8jVrzarbreMrthhUbElIGVZQ&oe=69A069F7",
  "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/630646305_833813823044880_7833701592610946435_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ATPfcRcma9kQ7kNvwGS38V5&_nc_oc=AdlOsCza6vyUYUgrtvGOskG5XvjoKt4ITQg3i-IzDIxZ5KHf3UUQueK8zqP6j5xSDpw&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=gUtdtJs_szqVbKZ5jJeA4A&oh=00_AfsrGRNT8OfiJ95UnrPfpU8jVrzarbreMrthhUbElIGVZQ&oe=69A069F7",
  "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/630646305_833813823044880_7833701592610946435_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ATPfcRcma9kQ7kNvwGS38V5&_nc_oc=AdlOsCza6vyUYUgrtvGOskG5XvjoKt4ITQg3i-IzDIxZ5KHf3UUQueK8zqP6j5xSDpw&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=gUtdtJs_szqVbKZ5jJeA4A&oh=00_AfsrGRNT8OfiJ95UnrPfpU8jVrzarbreMrthhUbElIGVZQ&oe=69A069F7",
  "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/630646305_833813823044880_7833701592610946435_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ATPfcRcma9kQ7kNvwGS38V5&_nc_oc=AdlOsCza6vyUYUgrtvGOskG5XvjoKt4ITQg3i-IzDIxZ5KHf3UUQueK8zqP6j5xSDpw&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=gUtdtJs_szqVbKZ5jJeA4A&oh=00_AfsrGRNT8OfiJ95UnrPfpU8jVrzarbreMrthhUbElIGVZQ&oe=69A069F7",
];

export default function Gallery() {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Camera className="text-orange-500 w-6 h-6" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600">
              Moments of Impact
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Capturing heartfelt moments from our events, volunteer efforts, and community programs.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg hover:border-2 border-orange-500 group"
            >
              <Image
                src={img}
                alt={`Gallery image ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>

              {/* Optional: image number / title */}
              {/* <span className="absolute bottom-2 left-2 text-white text-sm font-medium drop-shadow-md">
                {`Photo ${index + 1}`}
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}