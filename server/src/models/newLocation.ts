
const mongoose = require("mongoose");
const Joi = require("joi");


const requiredString = {
  required: true,
  type:String,
}

const requiredNumber = {
  required: true,
  type:Number,
}

const newLocationSchema = new mongoose.Schema(
  {
    user_id: requiredString,
    name: requiredString,
    mobileNumber:requiredNumber,
    areaName: requiredString,
    position:{
      lat:requiredNumber,
      lng:requiredNumber
    },
    cylinders:requiredNumber,
  },
  { timestamps: true }
);

const newLocation = mongoose.model("location", newLocationSchema);

interface newLocation{
  user_id:string,
  name:string,
  mobileNumber:number,
  areaName:string,
  position:{
    lat:number,
    lng:number,
  },
  cylinder:number
}


const joiString = Joi.string().min(5).max(255).required();
const joiNumber = Joi.number().min(0).required();

function validateLocation(newLocation: newLocation) {
  const schema = Joi.object({
    user_id:joiString,
    name:joiString,
    mobileNumber:joiNumber,
    areaName:joiString,
    position:{
      lat:joiNumber,
      lng:joiNumber,
    },
    cylinder:joiNumber,
  });

  return schema.validate(newLocation);
}

module.exports = { newLocation, validateLocation };
