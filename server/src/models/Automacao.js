const mongoose = require("mongoose");

const automacaoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "O nome é obrigatório"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "A descrição é obrigatória"],
      trim: true,
    },
    webhook: {
      type: String,
      required: [true, "O webhook é obrigatório"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["Não iniciado", "Sucesso", "Aviso", "Erro"],
      default: "Não iniciado",
    },
    frequency: {
      type: String,
      enum: ["A cada 1h", "A cada 4", "A cada 12H", "Diária", "Desativado"],
      default: "Desativado",
      required: [true, "A frequência é obrigatória"],
      trim: true,
    },
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
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
    collection: "automacoes",
  }
);

// Índices para melhor performance
automacaoSchema.index({ usuario: 1 });
automacaoSchema.index({ status: 1 });

module.exports = mongoose.model("Automacao", automacaoSchema);
