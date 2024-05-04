'use client';
import Image from "next/image";

const styles = {
  icon: "h-8 hover:cursor-pointer",
};

export default function MassIcon() {
  return (
    <Image
      src="/icon.png"
      alt="Mass"
      width={32}
      height={32}
      className={styles.icon}
      onClick={() => (window.location.href = "/")}
    />
  );
}
