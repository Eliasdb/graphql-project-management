"use client";

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
