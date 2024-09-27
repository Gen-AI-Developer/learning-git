"use client";
import React from "react";

export default function Notfound() {
  return (
    <>
      <section className="m-3 p-2 grid grid-cols-3">
        <div>404</div>
        <div className="w-1 bg-slate-500"></div>
        <div>Opps.. Page Not Found.</div>
      </section>
    </>
  );
}
