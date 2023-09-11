const dataProducts = require("../Module/allData"); // Import your database connection

addProduct = async (req, res) => {
    const { product_name, price, image, p_category  } = req.body;

    dataProducts.query(
        'INSERT INTO products (product_name, price, image, p_category) VALUES (?, ?, ?, ?)',
        [product_name, price, image, p_category ],
        (error, results) => {
            if (error) {
                console.error(error);
                // Handle the error
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                console.log('Item added successfully');
                // You can access the inserted ID using results.insertId
                res.status(200).json({ message: 'Item added successfully' });
            }
        }
    );
}



editProduct = async (req, res) => {
    const itemId = req.params.id;
    const { product_name, price, image, p_category } = req.body;
    console.log(itemId);

      if (!product_name || !price || !image || !p_category) {
        return res.status(400).json({ error: 'Missing parameters in the request body' });
    }

    dataProduct.query(
        'UPDATE products SET product_name = ?, price = ?, image = ?, p_category = ? WHERE p_id = ?',
        [product_name, price, image, p_category , itemId],
        (error, results) => {
            if (error) {
                console.error(error);
                // Handle the error
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                console.log('Item updated successfully');
                res.status(200).json({ message: 'Item updated successfully' });
            }
        }
    );
}


    deleteProduct = async (req, res) => {
        const itemId = req.params.id;
            console.log(itemId);
    
        dataProducts.query(
            'DELETE FROM products WHERE p_id = ?',
            [itemId],
            (error, results) => {
                if (error) {
                    console.error(error);
                    // Handle the error
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    console.log('Item deleted successfully');
                    res.status(200).json({ message: 'Item deleted successfully' });
                }
            }
        );
    }


module.exports = {addProduct , editProduct , deleteProduct }