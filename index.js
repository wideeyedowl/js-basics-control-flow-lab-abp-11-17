// Write your code in this file!
function scuberGreetingForFeet(distance)
{
  if (distance <= 400)
    {
      return "This one is on me!";
    }
    else if (distance > 2000 && distance < 2500)
      {
        return "I will gladly take your thirty bucks.";
      }
    else if (distance > 2500)
    {
      return "No can do.";
    }

}

function ternaryCheckCity(destination)
{
  return (destination ==="NYC") ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip)
{
  switch(tip)
  {
    case 'generous':
    return "Thank you so much.";
    break;
    case 'not as generous':
    return "Thank you.";
    break;
    default:
    return "Bye.";
  }
}
