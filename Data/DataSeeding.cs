namespace vanlt_ForCV.Data;

public static class DataSeeding
{
    public static List<MenuModel> SeedMenuItems() => new()
    {
        new MenuModel { Name = "Home", OtherName = "Giới thiệu", Url = "home", OtherUrl = "#home" },
        new MenuModel { Name = "About", OtherName = "Thông tin", Url = "about", OtherUrl = "#about" },
        new MenuModel { Name = "Skills", OtherName = "Kỹ năng", Url = "skills", OtherUrl = "#skills" },
        new MenuModel { Name = "Education", OtherName = "Trình độ học vấn", Url = "education", OtherUrl = "#education" },
        new MenuModel { Name = "Experience", OtherName = "Kinh nghiệm", Url = "experience", OtherUrl = "#experience" },
        new MenuModel { Name = "Contact", OtherName = "Liên hệ", Url = "contact", OtherUrl = "#contact" }
    };
}

// Services/MenuService.cs
public class MenuService
{
    public List<MenuModel> Menus { get; private set; }

    public MenuService()
    {
        Menus = DataSeeding.SeedMenuItems();
    }
}