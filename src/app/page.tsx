import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl text-muted-foreground">HomePage</h1>
      <Button variant="outline" size="lg" className=" capitalize m-8">
        Click me
      </Button>
    </div>
  );
};

export default HomePage;