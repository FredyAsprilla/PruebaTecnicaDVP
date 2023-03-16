describe('busqueda', function() {

   it('Busqueda vuelos', function() {

      cy.viewport(1920, 1000)
   
      cy.visit('https://www.wingo.com/')
      cy.wait(500)

      
      cy.get('.cont-search > .cont-checks > #btnIdaVuelta > .circle > .circle-center').click({force: true})
      cy.wait(5000)

      
      cy.get('.input-origen > .select-drop > .info-airport > .select > .styledSelect').click()
      cy.wait(5000)

      cy.get('.input > .select-drop > .info-airport > .select > #inputOrigen').type('bogot')
      cy.scrollTo(0, 500)
      cy.wait(5000)
   
      cy.get('.info-airport > .select > #comboOrigen > li > .textCity').click()
      cy.scrollTo(0, 500)
      cy.wait(5000)
   
      cy.get('.input > .select-drop > .info-airport > .select > #inputDestino').click()
      cy.scrollTo(0, 500)
      cy.wait(5000)

      cy.get('.input > .select-drop > .info-airport > .select > #inputDestino').click()
      cy.scrollTo(0, 500)
      cy.wait(5000)

      cy.get('.input > .select-drop > .info-airport > .select > #inputDestino').type('cali')
      cy.scrollTo(0, 500)
      cy.wait(5000)

      cy.get('.info-airport > .select > #comboDestino > li > .textCity').click()
      cy.scrollTo(0, 500)
      cy.wait(5000)

      cy.get('.inputs-row > .input > #selectPasj > .info-airport > .icon-chev').click()
      cy.scrollTo(0, 500)
      cy.wait(5000)

      cy.get('.input > #selectPassenger > .passenger:nth-child(1) > .bts-add > .plus').click()
      cy.scrollTo(0, 500)
      cy.wait(5000)

      cy.get('.home-tpl > .section-home > .cont-search > .cont-inputs > .all-inputs').click()
      cy.scrollTo(0, 500)
      cy.wait(5000)

      cy.get('#inputOutboundDate > #btBalendarFrom > .info-airport > #fromDate > .icon-chev').click()
      cy.scrollTo(0, 500)
      cy.wait(5000)
      
      cy.get('#inputOutboundDate > .cont-calendar:nth-child(3) > .cont-months:nth-child(2) > .date-picker-wrapper:nth-child(1) > div:nth-child(1) .month-wrapper:nth-child(1) > .month2:nth-child(2) tr:nth-child(1) > td:nth-child(6) > .day:nth-child(1)').click()
      cy.scrollTo(0, 500)
      cy.wait(5000) 
        
      cy.get('#inputReturnDate > #btBalendarTo > .info-airport > #toDate > .icon-chev').click()
      cy.scrollTo(0, 500)
      cy.wait(5000)

      cy.get('#date-window-container > .date-picker-wrapper > div > div > .month-wrapper > .month2 > thead > .caption > th > .next').click()
      cy.scrollTo(0, 500)
      cy.wait(5000)

      cy.get('.month2 > tbody > tr:nth-child(1) > td:nth-child(1) > .day').click()
      cy.scrollTo(0, 500)
      cy.wait(5000)      
   })
  
  })