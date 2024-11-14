

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg}) => {

    const hancleClick = () => {
        if ( bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }

  return (
    <div className={`border-2 rounded-xl 
        ${bigShoeImg === imgURL.shoe
            ? 'border-coral-red'
            : 'border-transparent'
        } cursor-pointer max-sm:flex-1
    `} 
        onClick={handleClick()}
    >
        BigShoe
    </div>
  )
}

export default ShoeCard