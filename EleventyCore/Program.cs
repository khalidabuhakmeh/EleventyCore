var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapGet("/api/current-time", () => new
{
    datetime = DateTime.Now
});

app.Run();