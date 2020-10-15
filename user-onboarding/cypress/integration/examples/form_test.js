describe("User Onboarding", () => {
    
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("Sanity Check", () => {
        expect(5).to.equal(5)
    })

    const getName = () => cy.get("input[name='name']")
    const getEmail = () => cy.get("input[name='email']")
    const getPassword = () => cy.get("input[name='password']")
    const getTos = () => cy.get("input[name='termsOfService']")
    const getSubmit = () => cy.get("button")

    it("Get Elements", () => {
        getName().should("exist")
        getEmail().should("exist")
        getPassword().should("exist")
        getTos().should("exist")
        getSubmit().should("exist")
    })

    describe("Quality Checks", () => {

        it("Check Name", () => {
            getName().type("Corey")
            getName().should("have.value", "Corey")
        })

        it("Check Email", () => {
            getEmail().type("CPower1248@gmail.com")
            getEmail().should("have.value", "CPower1248@gmail.com")
        })

        it("Check Password", () => {
            getPassword().type("Reyxco1248")
            getPassword().should("have.value", "Reyxco1248")
        })

        it("Check Tos", () => {
            getTos().click()
            getTos().should("be.enabled")
        })
    })

    describe("Submit Checks", () => {

        it("Submit Disabled", () => {
                getSubmit().should("be.disabled")
        })

        it("Submit Enabled", () => {
            getName().type("Corey")
            getEmail().type("CPower1248@gmail.com")
            getPassword().type("Reyxco1248")
            getTos().click()

            getSubmit().should("be.enabled")
            getSubmit().click()
        })
    })

    describe("Validation", () => {

        it("If no... Name", () => {
            getEmail().type("CPower1248@gmail.com")
            getPassword().type("Reyxco1248")
            getTos().click()

            getSubmit().should("be.disabled")
        })

        it("If no... Email", () => {
            getName().type("Corey")
            getPassword().type("Reyxco1248")
            getTos().click()

            getSubmit().should("be.disabled")
        })

        it("If no... Password", () => {
            getName().type("Corey")
            getEmail().type("CPower1248@gmail.com")
            getTos().click()

            getSubmit().should("be.disabled")
        })
    })
})