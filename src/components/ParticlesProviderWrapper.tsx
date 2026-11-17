"use client";

import { useCallback } from "react";
import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return <ParticlesProvider init={init}>{children}</ParticlesProvider>;
}
