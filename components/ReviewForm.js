app.component('review-form', {
  template:
  /*html*/
  `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name" />

    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>
    
    <h4>Would you recommend this product?</h4>

    <div class="radio-button-container">
      <input type="radio" id="yes" :value="true" v-model="recommend" />
      <label for="yes">Yes</label>
    </div>

    <div class="radio-button-container">
      <input type="radio" id="no" :value="false" v-model="recommend" />
      <label for="no">No</label>
    </div>

    <button class="button" type="submit">Submit</button>
  </form>`,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      recommend: null,
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
        alert('Review is incomplete. Please fill out every field.')
        return
      }

      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend
      }

      this.$emit('review-submitted', productReview)

      this.name = ''
      this.review = ''
      this.rating = null
      this.recommend = null
    }
  }
})