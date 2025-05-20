// const express = require("express");
// const router = express.Router();
// const Order = require("../models/Order");

// router.post("/place", async (req, res) => {
//   try {
//     const { items, total, user } = req.body;

//     if (!items || !Array.isArray(items) || items.length === 0) {
//       return res.status(400).json({ msg: "Commande invalide." });
//     }

//     const order = new Order({ items, total, user });
//     await order.save();

//     res.status(201).json({ msg: "✅ Commande enregistrée avec succès", order });
//   } catch (error) {
//     console.error("Erreur lors de l'enregistrement de la commande :", error);
//     res.status(500).json({ msg: "❌ Erreur serveur" });
//   }
// });

// module.exports = router;
