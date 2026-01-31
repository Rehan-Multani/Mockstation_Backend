const mongoose = require("mongoose");
const UserPlanSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      unique: true,
      required: true,
    },
    categoryId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    isSelectedAll: {
      type: Boolean,
      default: false,
    },
    planStatus: {
      type: String,
      enum: ["active", "pending", "expired"],
      default: "pending",
    },
    expiresAt: {
      type: Date,
      index: true,
    },
  },

  { timestamps: true },
);

module.exports = mongoose.model("UserPlan", UserPlanSchema);
