import {useContext} from "react";
import {contextProp} from "../../useContext/useContext"

// material ui imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const SearchOutput = () => {
    const {data} = useContext(contextProp)

    const datas = data.slice(0,2);
    const [f1,f2] = datas
    const {small_cover_image,title,rating,genres} = f1
    const [t1,t2,t3] = genres
    console.log(datas)
    return (
        <div className="search-section">
            <h2 className="--flex-end ">your search here</h2>


            <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={small_cover_image}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
            </Card>
        </div>
    )
}

export default SearchOutput;