import { create } from "zustand";

type Resource = {
  id: string;
  title: string;
  description: string;
};

interface ResourceState {
  resources: Resource[];
  addResource: (resource: Resource) => void;
  removeResource: (id: string) => void;
}

export const useResourceStore = create<ResourceState>((set) => ({
  resources: [],
  addResource: (resource) =>
    set((state) => ({ resources: [...state.resources, resource] })),
  removeResource: (id) =>
    set((state) => ({
      resources: state.resources.filter((r) => r.id !== id),
    })),
}));
