const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/search', async (req, res) => {
  const { keyword, max_results = 5 } = req.query;
  res.json({
    status: "success",
    keyword: keyword,
    results: [
      {
        title: "範例 128GB USB 3.2 隨身碟",
        price: 399,
        rating: 4.9,
        shipping_time: "24小時內出貨",
        url: "https://shopee.tw/..."
      }
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
