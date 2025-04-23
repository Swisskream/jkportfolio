import React from 'react';
import toggleDetails from './gf_script';

const Recipe = ({ title, children }) => (
    <div class="recipe" onClick={(e) => toggleDetails(e.currentTarget)}>
        <h2>{title}</h2>
        <div class="details" style={{ display: 'none' }}>
            {children}
        </div>
    </div>
);

function recipesHTML() {
    return (
        <html className="GF_Recipes">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Gluten-Free Recipes</title>
                <link rel="stylesheet" href="homepage.css"/>
            </head>
            <body class="GF_body">
                <header class="GF_header">
                    <h1 class="title">Gluten-Free Recipes</h1>
                    <p>Delicious and healthy meals without the gluten!</p>
                </header>
                <div class="GF_container">
                    <div class="breakfast">
                        <h2>Breakfast</h2>
                        <Recipe title="Banana Oat Pancakes">
                                <div class="section">
                                    <h3>Ingredients:</h3>
                                    <ul>
                                    <li>2 ripe bananas</li>
                                    <li>2 large eggs</li>
                                    <li>1/2 cup gluten-free rolled oats</li>
                                    <li>1/2 tsp baking powder (ensure it's gluten-free)</li>
                                    <li>1/2 tsp vanilla extract (optional)</li>
                                    <li>Pinch of salt</li>
                                    <li>Coconut oil or butter for cooking</li>
                                    </ul>
                                </div>
                                <div class="section">
                                <h3>Instructions:</h3>
                                <ol>
                                    <li>Place bananas, eggs, oats, baking powder, vanilla extract, and salt into a blender or food processor.</li>
                                    <li>Blend until smooth and let the batter sit for 2-3 minutes to thicken slightly.</li>
                                    <li>Heat a non-stick skillet over medium heat and add a bit of oil or butter.</li>
                                    <li>Pour batter onto the skillet (about 1/4 cup per pancake).</li>
                                    <li>Cook for 2-3 minutes on each side, or until golden brown and cooked through.</li>
                                    <li>Serve warm with your favorite toppings like berries, yogurt, or maple syrup.</li>
                                </ol>
                                </div>
                                <div class="section note">
                                Note: Make sure your oats are labeled gluten-free, as some oats can be cross-contaminated with gluten during processing.
                                </div>
                        </Recipe>

                        <Recipe title="Sweet Potato Hash">
                                <div class="section">
                                    <h3>Ingredients:</h3>
                                    <ul>
                                        <li>2 medium sweet potatoes, diced</li>
                                        <li>1 red bell pepper, diced</li>
                                        <li>1 green bell pepper, diced</li>
                                        <li>1 small onion, diced</li>
                                        <li>2 tablespoons olive oil</li>
                                        <li>Salt and pepper to taste</li>
                                        <li>1 teaspoon paprika (optional)</li>
                                    </ul>
                                </div>
                                <div class="section">
                                    <h3>Instructions:</h3>
                                    <ol>
                                        <li>Heat olive oil in a skillet over medium heat.</li>
                                        <li>Add sweet potatoes and cook for about 10 minutes until they start to soften.</li>
                                        <li>Add bell peppers and onion, season with salt, pepper, and paprika.</li>
                                        <li>Cook for another 10-15 minutes until everything is tender and slightly crispy.</li>
                                    </ol>
                                </div>

                                <div class="section note">
                                    Note: Serve with eggs for a complete breakfast!
                                </div>
                        </Recipe>

                        <Recipe title="Chia Seed Pudding">
                                <div class="section">
                                    <h3>Ingredients:</h3>
                                    <ul>
                                        <li>1/4 cup chia seeds</li>
                                        <li>1 cup almond milk (or any non-dairy milk)</li>
                                        <li>1 tablespoon honey or maple syrup</li>
                                        <li>1/2 teaspoon vanilla extract</li>
                                        <li>Fresh fruits and nuts for topping</li>
                                    </ul>
                                </div>
                                <div class="section">
                                    <h3>Instructions:</h3>
                                    <ol>
                                        <li>In a bowl, mix chia seeds, almond milk, honey, and vanilla extract.</li>
                                        <li>Stir well and let it sit for 5 minutes. Stir again to prevent clumping.</li>
                                        <li>Cover and refrigerate for at least 2 hours or overnight.</li>
                                        <li>Serve topped with fresh fruits and nuts.</li>
                                    </ol>
                                </div>
                                <div class="section note">
                                    Note: This can be made ahead of time for a quick breakfast!
                                </div>
                        </Recipe>
                    </div>

                    <div class="dinner">
                        <h2>Dinner</h2>
                        <Recipe title="Quinoa Salad with Chickpeas">
                                <div class="section">
                                    <h3>Ingredients:</h3>
                                        <ul>
                                            <li>1 cup uncooked quinoa (rinsed)</li>
                                            <li>2 cups water or vegetable broth</li>
                                            <li>1 cup cherry tomatoes, halved</li>
                                            <li>1 cucumber, diced</li>
                                            <li>1 red bell pepper, diced</li>
                                            <li>1/4 cup red onion, finely chopped</li>
                                            <li>1/4 cup fresh parsley, chopped</li>
                                            <li>1/4 cup crumbled feta cheese (optional)</li>
                                            <li>1 can (15 oz) chickpeas, drained and rinsed</li>
                                            <li>Salt and pepper to taste</li>
                                        </ul>
                                </div>
                                <div class="section">
                                    <h3>Dressing:</h3>
                                    <ul>
                                        <li>3 tablespoons olive oil</li>
                                        <li>2 tablespoons lemon juice (freshly squeezed)</li>
                                        <li>1 garlic clove, minced</li>
                                        <li>1 teaspoon Dijon mustard (gluten-free)</li>
                                        <li>1/2 teaspoon honey or maple syrup</li>
                                        <li>Salt & pepper to taste</li>
                                    </ul>
                                </div>
                                <div class="section">
                                    <h3>Instructions:</h3>
                                    <ol>
                                        <li><strong>Cook the quinoa:</strong> Combine quinoa and water/broth in a pot. Bring to a boil, reduce heat, cover, and simmer for 15 minutes. Fluff and cool.</li>
                                        <li><strong>Make the dressing:</strong> Whisk together all dressing ingredients in a bowl or jar.</li>
                                        <li><strong>Assemble the salad:</strong> In a large bowl, mix quinoa, veggies, chickpeas, herbs, and feta. Pour dressing and toss.</li>
                                        <li><strong>Chill or serve:</strong> Enjoy immediately or chill for 30+ minutes for best flavor.</li>
                                    </ol>
                                </div>
                        </Recipe>

                        <Recipe title="Grilled Chicken with Veggies">
                                <div class="section">
                                    <h3>Ingredients:</h3>
                                    <ul>
                                        <li>4 boneless, skinless chicken breasts</li>
                                        <li>2 tablespoons olive oil</li>
                                        <li>1 teaspoon garlic powder</li>
                                        <li>1 teaspoon paprika</li>
                                        <li>Salt and pepper to taste</li>
                                        <li>Mixed vegetables (zucchini, bell peppers, onions)</li>
                                    </ul>
                                </div>
                                <div class="section">
                                    <h3>Instructions:</h3>
                                    <ol>
                                        <li>Preheat grill to medium-high heat.</li>
                                        <li>In a bowl, mix olive oil, garlic powder, paprika, salt, and pepper. Coat chicken with the mixture.</li>
                                        <li>Grill chicken for 6-7 minutes per side or until cooked through.</li>
                                        <li>Add veggies to the grill for the last 5-7 minutes until tender.</li>
                                    </ol>
                                </div>
                                <div class="section note">
                                    Note: Serve with a side salad or quinoa for a complete meal!
                                </div>
                        </Recipe>

                        <Recipe title="Vegetable Stir-Fry">
                                <div class="section">
                                    <h3>Ingredients:</h3>
                                    <ul>
                                        <li>2 cups mixed vegetables (broccoli, bell peppers, carrots)</li>
                                        <li>1 tablespoon olive oil</li>
                                        <li>2 tablespoons gluten-free soy sauce or tamari</li>
                                        <li>1 teaspoon ginger, minced</li>
                                        <li>1 garlic clove, minced</li>
                                        <li>Cooked rice or quinoa for serving</li>
                                    </ul>
                                </div>
                                <div class="section">
                                    <h3>Instructions:</h3>
                                    <ol>
                                        <li>Heat olive oil in a large skillet over medium-high heat.</li>
                                        <li>Add garlic and ginger, sauté for 30 seconds.</li>
                                        <li>Add mixed vegetables and stir-fry for 5-7 minutes until tender-crisp.</li>
                                        <li>Add soy sauce and stir to combine. Cook for another minute.</li>
                                        <li>Serve over rice or quinoa.</li>
                                    </ol>
                                </div>

                                <div class="section note">
                                    Note: Customize with your favorite veggies!
                                </div>
                        </Recipe>
                    </div>

                    <div class="snack">
                        <h2>Snacks</h2>
                        <Recipe title="Almond Butter Energy Bites">
                                <div class="section">
                                    <h3>Ingredients:</h3>
                                    <ul>
                                        <li>1 cup rolled oats (gluten-free)</li>
                                        <li>1/2 cup almond butter</li>
                                        <li>1/4 cup honey or maple syrup</li>
                                        <li>1/4 cup chocolate chips (optional)</li>
                                        <li>1/4 cup chia seeds or flaxseeds</li>
                                    </ul>
                                </div>
                                <div class="section">
                                    <h3>Instructions:</h3>
                                    <ol>
                                        <li>In a bowl, mix all ingredients until well combined.</li>
                                        <li>Refrigerate for 30 minutes to firm up.</li>
                                        <li>Roll into small balls and store in the fridge.</li>
                                    </ol>
                                </div>
                                <div class="section note">
                                    Note: These are great for a quick energy boost!
                                </div>
                        </Recipe>

                        <Recipe title="Stuffed Bell Peppers">
                                <div class="section">
                                    <h3>Ingredients:</h3>
                                    <ul>
                                        <li>4 bell peppers (any color)</li>
                                        <li>1 cup cooked quinoa</li>
                                        <li>1 can black beans, drained and rinsed</li>
                                        <li>1 cup corn (fresh or frozen)</li>
                                        <li>1 teaspoon cumin</li>
                                        <li>Salt and pepper to taste</li>
                                    </ul>
                                </div>
                                <div class="section">
                                    <h3>Instructions:</h3>
                                    <ol>
                                        <li>Preheat oven to 375°F (190°C).</li>
                                        <li>Cut the tops off the bell peppers and remove seeds.</li>
                                        <li>In a bowl, mix quinoa, beans, corn, cumin, salt, and pepper.</li>
                                        <li>Stuff the mixture into the bell peppers.</li>
                                        <li>Place in a baking dish and bake for 25-30 minutes until peppers are tender.</li>
                                    </ol>
                                </div>
                                <div class="section note">
                                    Note: Top with cheese before baking for extra flavor!
                                </div>
                        </Recipe>
                        
                        <Recipe title="Trail Mix">
                                <div class="section">
                                    <h3>Ingredients:</h3>
                                    <ul>
                                        <li>1 cup mixed nuts (almonds, walnuts, cashews)</li>
                                        <li>1/2 cup dried fruits (raisins, cranberries, apricots)</li>
                                        <li>1/4 cup dark chocolate chips (optional)</li>
                                        <li>1/4 cup pumpkin seeds</li>
                                    </ul>
                                </div>
                                <div class="section">
                                    <h3>Instructions:</h3>
                                    <ol>
                                        <li>Mix all ingredients in a bowl.</li>
                                        <li>Store in an airtight container for up to 2 weeks.</li>
                                    </ol>
                                </div>

                                <div class="section note">
                                    Note: Perfect for on-the-go snacking!
                                </div>
                        </Recipe>
                    </div>
                </div>

                {/* <script type='module' src="gf_script.js"></script> */}
            </body>
        </html>
    );
}

export default recipesHTML;