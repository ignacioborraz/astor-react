import { Link as Anchor } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full justify-between items-center pb-5 bg-white">
      <img
        className="object-cover hidden md:flex w-full h-40 rounded-[0px_0px_50%_50%]"
        src="/img/footer.jpg"
      />
      <div className="flex flex-col items-center px-5 w-full md:w-11/12 md:flex-row md:justify-between ">
        <div className="flex justify-evenly items-center mt-2">
          <Anchor to="/" className="mr-10 text-xl" href="">
            Home
          </Anchor>
          <Anchor to="/contact" className="text-xl" href="">
            Contact
          </Anchor>
        </div>
        <img className="my-4 w-20" src="/img/logo.png" />
        <div className="flex flex-col items-center mt-2">
          <div className="flex w-full justify-evenly">
            <img className="h-7 w-7 m-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAshJREFUaEPtmkuoTlEUx39XRp4x8Y4BAxl4l1IeoQxkYCKFkQGhDMREXAMDAynviYmSUkjCAIVIyTOPASnyKAbkNSP20v7yddxzzto3Z+9z7l17cgbfWt/6/9ertdc5HfSy09HL+GKEe3rELcIW4R7mAU1KDwWWAaNrzv0NcBr4WISzjPBw4AEwrOZkW/DeA5MBeXZ5yghvAPY3hGwLpmA+2F3CncCOhhHe6fAK7m5F2Ag3INoW4fYglTUtS2lL6fp5wGrYarggK61p1a9k/0FkNWw1/B9r+CJwF7gHDAKmAnOBKcpSEL3r/kr6BZgGzAAWK/VFLEpKvwZWADe7ACbT3HpgN9AvB/h3YGvBtW4ecAwYoyBeOeEnwCzgWwmYScDjHBn57WmJ/kDgFiCyRadSwj982j1SeF5ENgL7MrKFF/aMrGwz7gB9C+xVSviM33cp+f5Z/H8F+nuFz8AQt2T4pf0D1xfOuh6xNBXhdcCRALAieqrNSSeB5YH60g8OpCI8HngRCHitWwoe9jprXCM6GqgvNp+nIjwKeBcIeJXvuKK2EjgeqD8SeJuK8BLgfCDgvcAmr7PHdffNgfpi81wqwtuAXYGArwFzvM4VYGGg/nY/XOSpVdqlJZ1lmvqgBD0fuAz08fI/ARkqbij1R/hJTp5JCIvR28ACxeAx0Q8OgzNIP/nB5VkJ6QHOOVddOk8vkas0wi3br4DVfg7O4tGOlluAQzlkZgMn6jJatmO84FPuvr88yKVB6lUuAZojlwep8Yd+QBH9mXW8PGjIxJKJktKxyGjsGOF2L9mbh0zO2NZSU0SJZayGrYYLUtBqOHF9asxbDVsNWw3/9UATP0yT3XfuVrNstBznN4RFi29NI4klIy8GJgAv8wyWERa9se6d0aKGfFx6CZBlRO7REI4VnSh2jHAUNyc0YhFO6Pwopi3CUdyc0MhvUvKpPUzxpvEAAAAASUVORK5CYII="/>
            <img className="h-7 w-7 m-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABOZJREFUaEPtmmuIVVUUx39+i6QsjdSeGj18UCAmkSlBJRQVFUGlJSIEGRWlaIZp9LDMiqIHPSmid5qVRRZRKWolkRKFJFkZFn1QqTDMgsT2P/bQ7c45Z++1zz7D4NwFAzNz1+t/1tnrtW8/+hj162N46QDe1yPeiXAnwvvYE+i80r08oIcBZwFjgGOBA4Dt7u/l7u8XYnzPFeHTgYXAycB+wKfAauBO4PcYRwI8o4C7gAsq+L4Fbgeer9JVF/AQ4D7g8hIj3wFnA3ImhfTw7gBmG4SfA6aV8dcBfAXwBLB/wBmB1utnpWHAe8AJVkFghvetm2gq4PuBmQZHrgceMvDrjL4PHGKQaWX9DTiq6DilAH4DuNDoyM/A4ZEyBwIbgSMi+cvYpgPPtn9oAXww8DZwWqIjSmjrI2RfAS6N4AuxSM/kVMDHAO8Cx4esVHw+D1gUkD8feKuGjVbRr4CTUgCP904MqunISleqzqjQoYz8DXBkTTtd4oXHKPRK6xw8k8mBP4D+FbpuAB7IZEtqtgJHWyI8x5WcezI6IFWK3k8lOj8DxmW0p3yhvPE/KovwfF/wM9r/V9Uk4IMCpcoRH/n28GtAr+NIX/pSarhMvOyOyJRYwE+5SFxZ4NiXRYnA8FSuc7X1kQJ+VYBfC/4/0JXALxLP9Y3uCN0bC1h8G3yTrt/fBGa5lm0LoGisSnTiUdfsX2N4QGK92ffpRjGUbNXTR73SYlKnIqAaAJa1yV3iXrlXrR4AH/ppxyKqmqyaaqFfgMKqEsrSVUZUQo6zeAFsAwYbZS5yx+h1o8yTwFVFMnUAX+ue4sNGR8SuFlNJKZZSXumJ7k1amxvwQSWJJgTkPFd+3gkxtXy+xmX2CQb+TT7DF4rUibAUpgwStxhK3omAKoOFVF2eLhOoC1iDdreJJODdCuDcSATq8tTtxZKqiPLKnqYAq34qI1pIO6hDIwSGGs+6VCqjL6nSXTfC0v0JcGoEgFYWTV2bAzJKiEqMsaQGRYuDSsoBeIFfnoVstX5euoLxTHJcjY+FNIlpImsc8CluUbcuZKjt86WAmpcy+twtG8YadKpOXxzDnyPCsqMd0oAYg55Hq1ud4z8LZNQDLzbo2u06sRF+HAyK5QL8WuwTbvHosoL2VOOh9tlaBsTS1NglvBTmAqwz+Vish55P86+OQxdpDFSzb9lUvlSxEy90Jxdg1T711lZ6HLjar340oKh7iyUtEka7KW5nrEDOCEvXj4mrVTmespI90y8NLHizvdIyau2KTI62Met6RysoM+V6pWVY65QXzR7YBdRgKLn9bRfNl7RkO3V6svi9w3dTZYvAoK6cEZax1rVQ0LiR4S8/JqopSabcgHWzcFOyN+WCe32d1zhai3ID1uLs41oeFQsXbiBT7OQGLH1a3+iiPBclZ+QiB3IDlg31wYpIDrrNKbk1h6IuHU0A1nr3hwxtq+qsopuVmgAsB9XjdrubNXiui7UHDfzRrE0BHg58H+3Ff4wa9fSg9DWkRqgpwHL2bmCuwWtdYGuID61+DCq7szYJWNZ0U6gmv4oUVV3n6KdxahqwBnmtc7R8b6dd7hZCt5S64bPcRNR6KE0D7nJOX047x39HRDcD2mroO1iKbo9STwHuUVBVxjqAe00oGnKkE+GGHmyvUduJcK8JRUOO9LkI/wOzEK49E27LOgAAAABJRU5ErkJggg=="/>
          </div>
          <Anchor
            to="/donate"
            className="border-none bg-[#F472B6] hover:drop-shadow-xl w-full p-2 text-center text-xl text-white mt-2 rounded-lg"
          >
            Donate ❤️
          </Anchor>
        </div>
      </div>
    </footer>
  );
}
