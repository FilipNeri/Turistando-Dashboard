import api from "./api";

export default {
  listandoImagens: () => {
    return api.get("/images");
  },
  listandoImagensID: (imagem) => {
    return api.get("/images/" + imagem.id);
  },
  removerImagem: (imagem) => {
    return api.post("/images/deletarimagem", imagem);
  },
  inserindoImagem: (formData) => {
    return api.post("/images/inserindoimagem", formData, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
    });
  },
};
