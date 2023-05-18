# Cypress-image-comparison
This is to do basic image comparison and identifying differences based on threshold between the images

To open cypress test execution E2E window:

> npx cypress open

Image differences will be updated in "cypress/e2e/1-getting-started/__image_snapshots__/custom image name,0.diff.png"

and would look something like:

<img width="1001" alt="image" src="https://github.com/leelasriteja/Cypress-image-comparison/assets/29068723/994a3d66-d93a-44f3-9b43-386313973783">

and expected console output when there is difference in images:

<img width="1001" alt="image" src="https://github.com/leelasriteja/Cypress-image-comparison/assets/29068723/a2b72a69-8c4c-42e3-a999-cdb236056256">

The main logic lies in below piece of code: 

``` it('toMatchImageSnapshot - element', () => {
    cy.visit('https://example.cypress.io/todo')
      .then(() => {
        cy.get('.new-todo').type('write tests{enter}')
        cy.contains('.todo-list li', 'write tests').find('.toggle').check()
        cy.get('.todoapp')
          .toMatchImageSnapshot({
            "imageConfig": {
              "createDiffImage": true,                // Should a "diff image" be created, can be disabled for performance
              "threshold": 0.01,                      // Amount in pixels or percentage before snapshot image is invalid
              "thresholdType": "percent",             // Can be either "pixel" or "percent"
            },
            "name": "custom image name",            // Naming resulting image file with a custom name rather than concatenating test titles
            "separator": ","
          });
      });
  }); ```

