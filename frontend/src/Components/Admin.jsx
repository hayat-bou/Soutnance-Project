import { useState, useEffect } from 'react';

 const Admin = () =>{
  // États pour l'animal
  const [nomAnimal, setNomAnimal] = useState('');
  const [vacciné, setVacciné] = useState(false);
  const [genre, setGenre] = useState('male');
  const [image, setImage] = useState('');
  const [ville, setVille] = useState('');
  const [animaux, setAnimaux] = useState([]);

  // États pour le produit
  const [nomProduit, setNomProduit] = useState('');
  const [prixProduit, setPrixProduit] = useState('');
  const [descriptionProduit, setDescriptionProduit] = useState('');
  const [produits, setProduits] = useState([]);

  // Charger les données au démarrage
  useEffect(() => {
    const animauxSauvegardés = JSON.parse(localStorage.getItem('animaux')) || [];
    const produitsSauvegardés = JSON.parse(localStorage.getItem('produits')) || [];
    setAnimaux(animauxSauvegardés);
    setProduits(produitsSauvegardés);
  }, []);

  // Ajouter un animal
  const ajouterAnimal = (e) => {
    e.preventDefault();
    if (!nomAnimal || !ville || !image) {
      alert('Veuillez remplir le nom, la ville et l\'URL de l\'image.');
      return;
    }

    const nouvelAnimal = {
      id: Date.now(),
      nom: nomAnimal,
      vacciné,
      genre,
      image,
      ville,
    };

    const animauxMisAJour = [...animaux, nouvelAnimal];
    setAnimaux(animauxMisAJour);
    localStorage.setItem('animaux', JSON.stringify(animauxMisAJour));

    // Réinitialiser le formulaire
    setNomAnimal('');
    setVacciné(false);
    setGenre('male');
    setImage('');
    setVille('');
  };

  // Ajouter un produit
  const ajouterProduit = (e) => {
    e.preventDefault();
    if (!nomProduit || !prixProduit || !descriptionProduit) {
      alert('Veuillez remplir tous les champs du produit.');
      return;
    }

    const nouveauProduit = {
      id: Date.now(),
      nom: nomProduit,
      prix: prixProduit,
      description: descriptionProduit,
    };

    const produitsMisAJour = [...produits, nouveauProduit];
    setProduits(produitsMisAJour);
    localStorage.setItem('produits', JSON.stringify(produitsMisAJour));

    // Réinitialiser le formulaire
    setNomProduit('');
    setPrixProduit('');
    setDescriptionProduit('');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Tableau de bord administrateur</h1>
          <p className="text-gray-600">Gérez les animaux et produits de votre application</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulaire Animal */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Ajouter un nouvel animal</h2>
            <form onSubmit={ajouterAnimal} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom de l'animal</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nom de l'animal"
                  value={nomAnimal}
                  onChange={(e) => setNomAnimal(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                    checked={vacciné}
                    onChange={(e) => setVacciné(e.target.checked)}
                  />
                  <span className="text-gray-700">Vacciné</span>
                </label>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Genre</label>
                  <select 
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  >
                    <option value="male">Mâle</option>
                    <option value="female">Femelle</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL de l'image</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://example.com/image.jpg"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ville"
                  value={ville}
                  onChange={(e) => setVille(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200"
              >
                Ajouter l'animal
              </button>
            </form>
          </div>

          {/* Formulaire Produit */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Ajouter un nouveau produit</h2>
            <form onSubmit={ajouterProduit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom du produit</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nom du produit"
                  value={nomProduit}
                  onChange={(e) => setNomProduit(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prix (€)</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Prix"
                  value={prixProduit}
                  onChange={(e) => setPrixProduit(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Description du produit"
                  value={descriptionProduit}
                  onChange={(e) => setDescriptionProduit(e.target.value)}
                  required
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-200"
              >
                Ajouter le produit
              </button>
            </form>
          </div>
        </div>

        {/* Liste des Animaux */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Animaux enregistrés ({animaux.length})</h2>
          {animaux.length === 0 ? (
            <p className="text-gray-500">Aucun animal enregistré pour le moment.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {animaux.map((animal) => (
                <div key={animal.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-200">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={animal.image} 
                      alt={animal.nom} 
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-medium text-gray-800">{animal.nom}</h3>
                      <p className="text-sm text-gray-600">Ville: {animal.ville}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          animal.genre === 'male' ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'
                        }`}>
                          {animal.genre === 'male' ? 'Mâle' : 'Femelle'}
                        </span>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          animal.vacciné ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {animal.vacciné ? 'Vacciné' : 'Non vacciné'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Liste des Produits */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Produits enregistrés ({produits.length})</h2>
          {produits.length === 0 ? (
            <p className="text-gray-500">Aucun produit enregistré pour le moment.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {produits.map((produit) => (
                    <tr key={produit.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{produit.nom}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{produit.prix} €</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{produit.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Admin;