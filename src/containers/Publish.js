import React, { useState } from "react";
import axios from "axios";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState();

  const formData = new FormData();
  formData.append("title", title);
  formData.append("desciption  ", description);
  formData.append("price", price);
  formData.append("condition", condition);
  formData.append("city", city);
  formData.append("brand", brand);
  formData.append("size", size);
  formData.append("color", color);
  formData.append("picture", picture);

  //   récuperation du token
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      title &&
      description &&
      price &&
      condition &&
      city &&
      brand &&
      size &&
      color &&
      picture
    ) {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        { headers: { authorization: "Bearer " + token } }
      );

      console.log(response.data);
    }
  };

  console.log(token);

  return (
    <div className="publish-main">
      <div className="publish-container">
        <div className="form">
          <h2>Vends ton article</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-content">
              <div className="categorie">
                <input
                  className="input"
                  type="file"
                  name="picture"
                  onChange={(e) => {
                    setPicture(e.target.files[0]);
                  }}
                />
              </div>
            </div>
            <div>
              <div className="categorie">
                <label htmlFor="title">Titre</label>
                <input
                  className="input"
                  type="text"
                  name="title"
                  value={title}
                  placeholder="ex : Chemise Sézane verte"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="categorie">
                <label htmlFor="description">Décris ton article</label>
                <input
                  className="input"
                  type="text"
                  name="description"
                  value={description}
                  placeholder="ex : porté quelques fois, taille correctement"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <div className="categorie">
                <label htmlFor="brand">Marque</label>
                <input
                  className="input"
                  type="text"
                  name="brand"
                  value={brand}
                  placeholder="Marque"
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                />
              </div>
              <div className="categorie">
                <label htmlFor="size">Taille</label>
                <input
                  className="input"
                  type="text"
                  name="size"
                  value={size}
                  placeholder="Taille"
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                />
              </div>

              <div className="categorie">
                <label htmlFor="color">Couleur</label>
                <input
                  className="input"
                  type="text"
                  name="couleur"
                  value={color}
                  placeholder="Couleur"
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                />
              </div>

              <div className="categorie">
                <label htmlFor="condition">État</label>
                <input
                  className="input"
                  type="text"
                  name="condition"
                  value={condition}
                  placeholder="Indique l'état de ton article"
                  onChange={(e) => {
                    setCondition(e.target.value);
                  }}
                />
              </div>
              <div className="categorie">
                <label htmlFor="city">Lieu</label>
                <input
                  className="input"
                  type="text"
                  name="city"
                  value={city}
                  placeholder="Ex: Paris"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <div className="categorie">
                <label htmlFor="price">Prix</label>
                <input
                  className="input"
                  type="text"
                  name="price"
                  value={price}
                  placeholder="0,00€"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
            </div>
            <button type="submit">Ajouter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Publish;
