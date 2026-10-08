const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    pid: {
      type: String,
      required: [true, 'Mã sản phẩm (pid) là bắt buộc'],
      unique: true,
      trim: true
    },
    pname: {
      type: String,
      required: [true, 'Tên sản phẩm (pname) là bắt buộc'],
      trim: true
    },
    price: {
      type: Number,
      required: [true, 'Giá sản phẩm (price) là bắt buộc'],
      min: [0, 'Giá không được nhỏ hơn 0']
    },
    quantity: {
      type: Number,
      required: [true, 'Số lượng (quantity) là bắt buộc'],
      min: [0, 'Số lượng không được nhỏ hơn 0'],
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', productSchema);