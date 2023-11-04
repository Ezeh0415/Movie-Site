import {useContext} from "react";
import {contextProp} from "../../useContext/useContext"

// material ui imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const SearchOutput = () => {
    const {data,darkMood} = useContext(contextProp)

    const datas = data.slice(0,2);
    const [f1,f2] = datas
    const {medium_cover_image,title,rating,genres} = f1
    const [t1,t2,t3] = genres
    console.log(datas)
    return (
        <div className="search-section" data-theme={darkMood}>
            <h2 className="--flex-end ">your search here</h2>


            <Card sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h6">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {rating}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {t1}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {t2}
                        </Typography>
                        </CardContent>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151, height: 151 }}
                        image={medium_cover_image}
                        alt={title}
                    />
            </Card>
        </div>
    )
}

export default SearchOutput;