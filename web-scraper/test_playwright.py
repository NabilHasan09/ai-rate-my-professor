from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup

with sync_playwright() as p:
    browser = p.webkit.launch(headless=False, slow_mo=500)
    page = browser.new_page()
    page.goto('https://www.ratemyprofessors.com/login', wait_until="domcontentloaded")
    page.fill('input#email', 'michaelticktack123@gmail.com')
    page.fill('input#password', 'AwesomePencil12')
    page.click('button:has-text("Continue")')
    page.click('button:has-text("Close")')
    page.click('button.CloseButton__StyledCloseButton-sc-1r6gyvl-0.fnjXvE.Toast__StyledCloseButton-sc-11o4quu-1.dNnlzc')
    page.is_visible('input.Search__DebouncedSearchInput-sc-10lefvq-1.fwqnjW')
    page.click('a[href="/school/222"]')
    page.click('a[href="/search/professors/222?q=*"]')
    page.is_visible('networkidle')

    page.wait_for_selector('div.TeacherCard__CardInfo-syjs0d-1.fkdYMc')
    names_elements = page.query_selector_all("div.CardName__StyledCardName-sc-1gyrgim-0")
    ratings_elements = page.query_selector_all("div.CardNumRating__CardNumRatingNumber-sc-17t4b9u-2")
    professor_links = page.query_selector_all("a.TeacherCard__StyledTeacherCard-syjs0d-0")

    professors = []
    for name_element, rating_element, professor_link in zip(names_elements, ratings_elements, professor_links):
        name = name_element.inner_text()
        rating = rating_element.inner_text()
        href = professor_link.get_attribute('href')
        
        page.click(f'a[href="{href}"]')

        reviews = []
        reviews_elements = page.query_selector_all("div.Comments__StyledComments-dzzyvm-0")
        subject_element = page.query_selector("a.TeacherDepartment__StyledDepartmentLink-fl79e8-0 b")
        subject = ""
        if subject_element:
            subject = subject_element.inner_text()

        for reveiw_element in reviews_elements:
            reviews.append(reveiw_element.inner_text())

        page.go_back()

        professor = {
            "name": name,
            "subject": subject,
            "rating": rating,
            "reviews": reviews
        }

        professors.append(professor)
    print(professors)
        
    json = {
        "reviews": professors
    }

browser.close()

    
