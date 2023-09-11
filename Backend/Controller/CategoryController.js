const dataCategory = require("../Module/allData"); 



addCategory = async (req, res) => {
    const {c_category_name} = req.body;
  
    dataCategory.query(
        'INSERT INTO category (c_category_name ) VALUES (?)',
        [c_category_name ],
        (error, results) => {
            if (error) {
                console.error(error);
                // Handle the error
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                console.log('Category added successfully');
                // You can access the inserted ID using results.insertId
                res.status(200).json({ message: 'Category added successfully' });
            }
        }
    );
  }



editCategory = async (req, res) => {
    const itemId = req.params.id;
    const { c_category_name } = req.body;
    console.log(itemId);

      if (!c_category_name  ) {
        return res.status(400).json({ error: 'Missing parameters in the request body' });
    }

    dataCategory.query(
        'UPDATE  category SET c_category_name = ? WHERE c_id = ?',
        [c_category_name , itemId],
        (error, results) => {
            if (error) {
                console.error(error);
                // Handle the error
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                console.log('category updated successfully');
                res.status(200).json({ message: 'category updated successfully' });
            }
        }
    );
}





deleteCategory = async (req, res) => {
    const itemId = req.params.id;
        console.log(itemId);

        dataCategory.query(
        'DELETE FROM category WHERE c_id = ?',
        [itemId],
        (error, results) => {
            if (error) {
                console.error(error);
                // Handle the error
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                console.log('Category deleted successfully');
                res.status(200).json({ message: 'Category deleted successfully' });
            }
        }
    );
}




module.exports = { addCategory,editCategory, deleteCategory };