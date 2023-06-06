"use client";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import {
  Clients,
  AddProjectModal,
  AddClientModal,
  Projects,
} from "./components";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>

      <Projects />
      <hr />
      <Clients />
    </>
  );
}
