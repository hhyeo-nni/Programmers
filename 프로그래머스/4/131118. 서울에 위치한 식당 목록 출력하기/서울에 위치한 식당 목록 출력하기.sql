-- 코드를 입력하세요

-- select * from rest_info ri
-- left join rest_review rr on ri.rest_id = rr.rest_id

SELECT ri.rest_id, ri.rest_name, ri.food_type, ri.favorites, 
    ri.address, round(avg(rr.review_score),2) as score
from rest_info ri
join rest_review rr on ri.rest_id = rr.rest_id
where ri.address like '서울%'
group by ri.rest_id, ri.rest_name, ri.food_type, ri.favorites, ri.address
order by round(avg(rr.review_score),2) desc, ri.favorites desc