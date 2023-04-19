const { Schema, model } = require("mongoose")

const concertSchema = new Schema(
  {
    artist: {
      type: String,
    },
    city: {
      type: String,
    },
    genre: {
      type: String,
    },
    date: {
      type: Date,
    },
    description: {
      type: String,
    },
  }
)

const Concert = model("Concert", concertSchema)

module.exports = Concert
