/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    // cy.visit()
    cy.visit('https://example.cypress.io/todo')
  })

  // it('navigate and write a todo task', () => {
  //   // cy.get('a[class="btn-primary btn-large btn-lg text-decoration-none"]').click({ force: true });
  //   // cy.get('input[name="add-task"]').type('write testsold here{enter}')
  //   // cy.get('section[class="section"]').toMatchImageSnapshot({
  //   //     imageConfig: {
  //   //       threshold: 0.001,
  //   //     },
  //   //   })
  // })

  it('completes todo', () => {
    // cy.get('.todoapp').screenshot()
    // cy.screenshot()
    // cy.screenshot('my-screenshot')
    cy.get('.new-todo').type('write tests{enter}')
    cy.contains('.todo-list li', 'write tests').find('.toggle').check()
  
    cy.contains('.todo-list li', 'write tests').should('have.class', 'completed')
  
    // run 'npm i cypress-plugin-snapshots -S'
    // capture the element screenshot and
    // compare to the baseline image
    // cy.get('.todoapp').toMatchImageSnapshot({
    //   imageConfig: {
    //     threshold: 0.001,
    //   },
    // })
    
  })
  it('toMatchImageSnapshot - element', () => {
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
  });
  
})
