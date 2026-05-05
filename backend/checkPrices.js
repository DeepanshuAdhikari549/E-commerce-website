import mongoose from 'mongoose'
import 'dotenv/config'
import productModel from './models/productModel.js'

const check = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/FitBae`)
    const products = await productModel.find({}).sort({ category: 1, subCategory: 1 })
    console.log('\nAll current prices in DB:\n')
    for (const p of products) {
      console.log(`  [${p.category.padEnd(5)}] [${p.subCategory.padEnd(10)}] ${p.name.padEnd(52)} ₹${p.price}`)
    }
    process.exit(0)
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}
check()
