import mongoose from 'mongoose'
import 'dotenv/config'
import productModel from './models/productModel.js'

// Realistic Indian market prices for each product
// Kids: ₹300–₹800 | Women: ₹500–₹1400 | Men: ₹500–₹2000
const priceMap = {
  // ─── KIDS ───────────────────────────────────────────────────────────────
  "Floral Print Girls' Dress":                      649,   // cute floral frock
  "Girls' Pastel Floral Print Dress":               599,
  "Girls' Pink Top with White Skirt":               449,
  "Girls' Light Blue Ruffle Sleeve Top":            349,
  "Girls' White Puff Sleeve Top with Beige Trousers": 549,
  "Girls' Pink Cropped Dance T-Shirt":              349,
  "Girls' Light Pink Printed Joggers":              399,
  "Girls' Light Green Paperbag Waist Pants":        379,
  "Girls' Blue Paperbag Waist Jeans":               499,
  "Boys' Navy Short Sleeve Shirt with White Tee":   399,
  "Boys' White \"GOAL!\" Graphic T-Shirt":          349,
  "Boys' Classic Black T-Shirt":                    300,
  "Boys' Red USA Sleeveless Sports Set":            499,
  "Boys' Pikachu Baseball Jersey":                  449,

  // ─── WOMEN ──────────────────────────────────────────────────────────────
  "Floral Off-Shoulder Puff Sleeve Top":            699,   // trendy top
  "Women's Black Puma Logo T-Shirt":                599,
  "Women's Light Grey V-Neck T-Shirt":              549,
  "Women's Light Blue Short Sleeve Shirt":          599,
  "Women's Light Blue Denim Jacket Set":            1099,  // denim jacket + jeans
  "Women's Black and White Printed Wide-Leg Pants": 899,
  "Women's Blue Wide-Leg Pants":                    799,
  "Girls' Black Heart Print Leggings":              549,   // listed under Women
  "Women's Teal Nike Track Jacket":                 999,
  "Women's Light Pink Casual Jacket":               899,
  "Women's Maroon Zip-Up Jacket":                   1199,
  "Women's Light Pink Bomber Jacket":               1099,
  "Women's Light Pink Puffer Jacket":               1399,  // puffer with faux fur hood

  // ─── MEN ────────────────────────────────────────────────────────────────
  "Oversized Pink Polo Shirt with White Collar":    799,
  "Men's Black Puma Graphic T-Shirt":               699,
  "Men's White Puma Logo T-Shirt":                  799,
  "Men's Boston Raglan T-Shirt":                    649,
  "Men's Classic White Crew Neck T-Shirt":          599,
  "Men's GAP Colorblock Rugby Shirt":               899,
  "Men's Beige Printed Casual Shirt":               699,
  "Men's Navy Blue Graphic T-Shirt":                649,
  "Men's Olive Green Cargo Joggers":                799,
  "Men's Blue Athletic Track Pants":                749,
  "Men's Black Joggers with Graphic Print":         699,
  "Men's Navy Blue Slim-Fit Jeans":                 1299,  // slim-fit denim
  "Men's Black Hooded Sleeveless Jacket":           999,
  "Men's Classic Blue Denim Jacket":                1299,
  "Men's Dark Blue Denim Jacket":                   1399,
  "Men's Navy Blue Suede Jacket":                   1699,
  "Men's Olive and Grey Puffer Jacket":             1499,
  "Men's Mustard Yellow Quilted Jacket":            1799,
}

const updatePrices = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/FitBae`)
    console.log('✅ MongoDB connected\n')

    const products = await productModel.find({})
    let updated = 0, skipped = 0

    for (const product of products) {
      const newPrice = priceMap[product.name]
      if (newPrice !== undefined) {
        await productModel.findByIdAndUpdate(product._id, { price: newPrice })
        console.log(`  ✓ [${product.category.padEnd(5)}] ${product.name.padEnd(50)} ₹${newPrice}`)
        updated++
      } else {
        console.log(`  ⚠  No price found for: "${product.name}"`)
        skipped++
      }
    }

    console.log(`\n🎉 Done! Updated: ${updated} | Skipped: ${skipped}`)
    process.exit(0)
  } catch (err) {
    console.error('❌ Failed:', err.message)
    process.exit(1)
  }
}

updatePrices()
