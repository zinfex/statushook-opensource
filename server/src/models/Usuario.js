const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "O nome é obrigatório"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "O email é obrigatório"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "A senha é obrigatória"],
      select: false, // Não retorna a senha nas consultas
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "usuarios",
  }
);

// Índices para melhor performance
usuarioSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model("Usuario", usuarioSchema);
