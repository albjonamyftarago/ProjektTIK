function showRecipe(recipe) {
    const recipes = {
        bakllava: {
            ingredients: [
                { ingredient: "Petë bakllavaje", amount: "500g" },
                { ingredient: "Arra të grira", amount: "500g" },
                { ingredient: "Gjalpë i shkrirë", amount: "300g" },
                { ingredient: "Sheqer", amount: "1kg" },
                { ingredient: "Ujë", amount: "500ml" },
                { ingredient: "Limon", amount: "1 kokërr" }
            ],
            preparation: `
                Lyejeni tepsinë me gjalpë të shkrirë dhe vendosni një petë bakllavaje. Lyejeni petën me gjalpë dhe përsëriteni procesin për disa shtresa.
                Shtoni një shtresë me arra të grira.
                Vazhdoni të vendosni petë bakllavaje duke i lyer me gjalpë dhe shtoni përsëri një shtresë me arra deri sa të mbarojnë përbërësit.
                Priteni bakllavanë në forma rombi ose katrore dhe lyejeni sipër me gjalpë të shkrirë.
                Piqeni në furrë të para-ngrohur në 180°C për rreth 40-50 minuta deri sa të marrë ngjyrë të artë.
                Ndërkohë, përgatisni sherbetin duke zier sheqerin me ujin dhe lëngun e limonit deri sa të trashet pak.
                Hidheni sherbetin e ngrohtë mbi bakllavanë e nxehtë dhe lëreni të ftohet para se ta shërbeni.
            `
        },
        sheqerpare: {
            ingredients: [
                { ingredient: "Miell", amount: "500g" },
                { ingredient: "Gjalpë", amount: "250g" },
                { ingredient: "Sheqer pluhur", amount: "100g" },
                { ingredient: "Vezë", amount: "2" },
                { ingredient: "Pluhur për pjekje", amount: "1 pako" },
                { ingredient: "Vanilje", amount: "1 lugë çaji" },
                { ingredient: "Sherbet", amount: "500ml" }
            ],
            preparation: `
                Në një enë të madhe, përziejini gjalpin e zbutur me sheqerin pluhur deri sa të bëhen kremozë.
                Shtoni vezët, vaniljen dhe përziejini mirë.
                Shtoni miellin dhe pluhurin për pjekje gradualisht duke e përzier derisa të formohet një brumë i butë.
                Formoni toptha të vegjël dhe vendosini në një tepsi të lyer me gjalpë.
                Piqini në furrë të para-ngrohur në 180°C për rreth 20 minuta deri sa të marrin një ngjyrë të artë.
                Ndërkohë, përgatisni sherbetin duke zier sheqerin me ujin dhe lëngun e limonit deri sa të trashet pak.
                Sapo të nxirren nga furra, hidhini sherbetin e nxehtë mbi sheqerparet e nxehta dhe lëreni të ftohen.
            `
        },
        kadaif: {
            ingredients: [
                { ingredient: "Kadaif", amount: "500g" },
                { ingredient: "Gjalpë", amount: "250g" },
                { ingredient: "Arra të grira", amount: "300g" },
                { ingredient: "Sheqer", amount: "1kg" },
                { ingredient: "Ujë", amount: "500ml" },
                { ingredient: "Limon", amount: "1 kokërr" }
            ],
            preparation: `
                Lyejeni tepsinë me gjalpë të shkrirë dhe vendosni një shtresë kadaifi.
                Spërkateni kadaifin me arra të grira dhe vendosni përsëri një shtresë kadaifi.
                Priteni kadaifin në forma të vogla katrore ose drejtkëndëshe.
                Shkrini gjalpin dhe hidheni mbi kadaifin në tepsi.
                Piqeni në furrë të para-ngrohur në 180°C për rreth 40-50 minuta deri sa të marrë një ngjyrë të artë.
                Ndërkohë, përgatisni sherbetin duke zier sheqerin me ujin dhe lëngun e limonit deri sa të trashet pak.
                Hidheni sherbetin e ngrohtë mbi kadaifin e nxehtë dhe lëreni të ftohet para se ta shërbeni.
            `
        },
        shendetlie: {
            ingredients: [
                { ingredient: "Miell", amount: "500g" },
                { ingredient: "Mjaltë", amount: "200g" },
                { ingredient: "Sheqer", amount: "150g" },
                { ingredient: "Vaj ulliri", amount: "200ml" },
                { ingredient: "Vezë", amount: "3 kokrra" },
                { ingredient: "Pluhur për pjekje", amount: "1 pako" },
                { ingredient: "Vanilje", amount: "1 lugë çaji" },
                { ingredient: "Kanellë", amount: "1 lugë çaji" },
                { ingredient: "Sherbet", amount: "500ml" }
            ],
            preparation: `
                Në një enë të madhe, përziejini vajin, sheqerin dhe mjaltin deri sa të bëhen kremozë.
                Shtoni vezët, vaniljen dhe përziejini mirë.
                Shtoni miellin, pluhurin për pjekje dhe kanellën gradualisht duke e përzier derisa të formohet një brumë i butë.
                Vendosni brumin në një tepsi të lyer me gjalpë dhe piqeni në furrë të para-ngrohur në 180°C për rreth 30-35 minuta deri sa të marrë një ngjyrë të artë.
                Ndërkohë, përgatisni sherbetin duke zier sheqerin me ujin dhe lëngun e limonit deri sa të trashet pak.
                Sapo të nxirret nga furra, hidhini sherbetin e nxehtë mbi shendetlien e nxehtë dhe lëreni të ftohet.
            `
        }
    };

    const selectedRecipe = recipes[recipe];
    const ingredientsTable = document.getElementById('ingredientsTable').getElementsByTagName('tbody')[0];
    const preparationText = document.getElementById('preparationText');

    // Clear previous ingredients
    ingredientsTable.innerHTML = '';

    // Populate new ingredients
    selectedRecipe.ingredients.forEach(item => {
        const row = ingredientsTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = item.ingredient;
        cell2.textContent = item.amount;
    });

    // Set preparation text
    preparationText.innerHTML = selectedRecipe.preparation;

    // Show recipe details
    document.getElementById('recipeDetails').style.display = 'block';
}
