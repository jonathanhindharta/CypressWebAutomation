//for Assignment Part 2 API Endpoint test suite automation
let titles=[],homeUrls=[],articleUrls=[]
describe('API End Point Test Suite', function() {
    //for Assignment endpoint https://www.techinasia.com/wp-json/techinasia/3.0/meta/navigational/sidebar/upcoming-events
    it('Assert API Upcoming Events', function() {
        cy.request('GET',Cypress.env('url_api_upcoming_events'),{
        }).then(function(response){
            expect(response.status).to.eq(200)
            //assert has 3 objects
            expect(response.body).to.have.length(3)
            //assert if the first object "position" value is 0 (in assignment assert if value is 1, but in response value is 0)
            expect(response.body[0].position).equal(0)
            //assert if the second object "position" value is 1 (in assignment assert if value is 0, but in response value is 1)
            expect(response.body[1].position).equal(1)
            //assert if the third object "position" value is 2
            expect(response.body[2].position).equal(2)
            
            response.body.forEach(res => {
                
                //assert if all the objects "title" are not empty
                expect(res.title).to.not.be.empty

                //assert if all the objects "home_url" are not empty and the string value starts with= "https://"
                expect(res.home_url).to.not.be.empty
                expect(res.home_url).to.be.satisfy(msg => msg.startsWith('https://'))
                
                //assert if all the objects "article_url" are not empty and the string value starts with= "https://"
                expect(res.article_url).to.not.be.empty
                expect(res.article_url).to.be.satisfy(msg => msg.startsWith('https://'))
            })
        })
    })

    //for Assignment endpoint https://www.techinasia.com/wp-json/techinasia/2.0/posts?page=1&per_page=30
    it('Assert API Post With Per Page 30', function() {
        cy.request('GET',Cypress.env('url_api_post_30'),{
        }).then(function(response){
            //assertThe response matches the following values: "total": 1, "per_page": 30, "current_page": 1, "total_pages": 1.
            //some property value is matches based on response.body like total, per_page (because api param is 10), and total_pages
            expect(response.body).to.have.property("total",52715)
            expect(response.body).to.have.property("per_page",30)
            expect(response.body).to.have.property("current_page",1)
            expect(response.body).to.have.property("total_pages",1758)
            //assert It contains a "posts" object with at least 10 post items.
            expect(response.body.posts).to.have.length.least(10)

            //loop to check each field in posts
            response.body.posts.forEach(res => {
                //assert field "author" are not empty in each posts
                expect(res.author).to.not.be.empty

                //assert field "slug" are not empty in each posts
                expect(res.slug).to.not.be.empty

                //assert field "content" are not empty in each posts
                expect(res.content).to.not.be.empty

                //assert field "title" are not empty in each posts
                expect(res.title).to.not.be.empty

                //assert field "status" are not empty in each posts
                expect(res.status).to.not.be.empty

                //assert field "type" are not empty in each posts
                expect(res.type).to.not.be.empty
            })
        })
    })

})