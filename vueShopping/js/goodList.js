var vm = new Vue({
    el:"#app",
    data () {
    return {
      goodsList: [],
      cartList:[],
      goodsNum: 0,
      goodsFilterPrice: [
        {
          startPrice: 0,
          endPrice: 500
        },
        {
          startPrice: 500,
          endPrice: 1000
        },
        {
          startPrice: 1000,
          endPrice: 2000
        },
        {
          startPrice: 2000,
          endPrice: 3000
        }
      ],
      checkSelect: 'all',
      filterBy: false,
      overLayFlag: false,
      sort: true,
      // busy: true,
      // loadShow: false,
      priceRander: '',
      mdShow:false,
      mdShowCart:false,
      upDown:false
    }
  },
  mounted () {
    this.getGoodsList()
  }, 
  methods: {
    getGoodsList (flag) {
      axios.get('data/goodList.json').then(res => {
      	if(res.data.result.length <= 0){
      		this.busy = true
        	this.loadShow = false        	        	
        }else{        	
	          if(this.priceRander == ''){
              this.goodsList = res.data.result        
            }else{
              this.goodsList = res.data.result.filter(item => {
                  return (item.salePrice >= this.priceRander.startPrice && item.salePrice <= this.priceRander.endPrice)
              })
              
            }
        }   
        if(this.sort == 0){
          this.goodsList.reverse()
        }  

        // console.log(this.goodsList)
      })
    },
    setPriceLight (index) {
      // console.log(index)
      this.checkSelect = index
      // this.page = 1
      if(this.checkSelect =='all'){
      	this.priceRander = ''
      }else{
        this.priceRander = this.goodsFilterPrice[index]      	
      }
      this.getGoodsList()
    },
    openPop () {
      // console.log(233)
      this.filterBy = true
      this.overLayFlag = true
    },
    closePop () {
      this.filterBy = false
      this.overLayFlag = false
    },
    sortChange () {
      this.sort = !this.sort      
      // this.page = 1
      // console.log(this.sort)
      this.upDown = !this.upDown
      this.getGoodsList() 
    },
    loadMore () {
        this.busy = true
        setTimeout(() => {
          // this.page++
          this.getGoodsList(true)
          this.loadShow = true
        }, 500)
    },
    addCart (item) {
      let flag = true;
        this.cartList.forEach( cartInfo =>{
            if(cartInfo.productId === item.productId){
               cartInfo.productNum++
                flag = false            
            }
        })
        if(flag){                 
          this.$set(item,'productNum',1)                     
          this.$set(item,'checked',1)           
          this.cartList.push(item)
          this.mdShow = true
        }else{
          this.mdShow = true
        }
        this.goodsNum++
    },
    closeModal () {
      this.mdShow = false
      this.mdShowCart = false
    }
  }
});